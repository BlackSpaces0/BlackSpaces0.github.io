import { readFile } from "node:fs/promises";

const readJson = async (path) => {
  try {
    return JSON.parse(await readFile(new URL(`../${path}`, import.meta.url), "utf8"));
  } catch (error) {
    throw new Error(`No se pudo leer o analizar ${path}: ${error.message}`);
  }
};

const [course, questionBank, miniLessons, tools, glossary] = await Promise.all([
  readJson("data/course.json"),
  readJson("data/quiz-bank.json"),
  readJson("data/mini-lessons.json"),
  readJson("data/tools.json"),
  readJson("data/glossary.json"),
]);

if (!Array.isArray(course.modules) || course.modules.length === 0) {
  throw new Error("data/course.json debe contener módulos.");
}

for (const module of course.modules) {
  const rows = questionBank[String(module.number)];
  if (!Array.isArray(rows) || rows.length < 15) {
    throw new Error(`El banco del módulo ${module.number} debe tener al menos 15 filas.`);
  }
  for (const [index, row] of rows.entries()) {
    if (!Array.isArray(row) || row.length !== 8 || row.some((value) => typeof value !== "string" || !value.trim())) {
      throw new Error(`Fila ${index + 1} inválida en quiz-bank.json, módulo ${module.number}.`);
    }
  }
  if (rows.length * 2 < 30) {
    throw new Error(`El módulo ${module.number} no alcanza 30 preguntas de práctica.`);
  }

  const lesson = miniLessons[String(module.number)];
  if (
    !lesson ||
    ["goal", "example", "challenge", "feedback"].some((key) => typeof lesson[key] !== "string" || !lesson[key].trim()) ||
    !Array.isArray(lesson.options) ||
    lesson.options.length < 2 ||
    lesson.options.some((option) => typeof option !== "string" || !option.trim()) ||
    !Number.isInteger(lesson.answer) ||
    lesson.answer < 0 ||
    lesson.answer >= lesson.options.length
  ) {
    throw new Error(`Microlección inválida o ausente en módulo ${module.number}.`);
  }
}

const questionCount = course.modules.reduce((total, module) => total + questionBank[String(module.number)].length * 2, 0);
if (questionCount < 50) {
  throw new Error("El banco combinado no alcanza las 50 preguntas del examen final.");
}

if (!Array.isArray(tools) || tools.length < 600) {
  throw new Error("El catálogo de herramientas debe contener al menos 600 entradas.");
}
for (const [index, tool] of tools.entries()) {
  if (!tool.name || !tool.url || !tool.source || !tool.source_license) {
    throw new Error(`Herramienta ${index + 1} sin nombre, URL, fuente o licencia.`);
  }
  try {
    new URL(tool.url);
  } catch {
    throw new Error(`URL inválida en la herramienta ${tool.name}.`);
  }
}

if (!Array.isArray(glossary) || glossary.length < 1000) {
  throw new Error("El glosario debe contener al menos 1.000 términos.");
}
for (const [index, term] of glossary.entries()) {
  if (!term.term || !term.definition || !term.source || !term.source_url) {
    throw new Error(`Término ${index + 1} sin término, definición o atribución.`);
  }
  try {
    new URL(term.source_url);
  } catch {
    throw new Error(`URL de fuente inválida para el término ${term.term}.`);
  }
}

console.log(
  `Contenido válido: ${course.modules.length} módulos, ${questionCount} preguntas de práctica, ${tools.length} herramientas y ${glossary.length} términos.`,
);
