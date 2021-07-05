export const editorLanguages = [
  { value: "javascript", label: "JavaScript" },
  { value: "jsx", label: "JSX" },
  { value: "java", label: "java" },
  { value: "python", label: "python" },
  { value: "xml", label: "xml" },
  { value: "ruby", label: "ruby" },
  { value: "sass", label: "sass" },
  { value: "markdown", label: "markdown" },
  { value: "mysql", label: "mysql" },
  { value: "json", label: "json" },
  { value: "html", label: "html" },
  { value: "handlebars", label: "handlebars" },
  { value: "golang", label: "golang" },
  { value: "csharp", label: "csharp" },
  { value: "coffee", label: "coffee" },
  { value: "css", label: "css" },
];

export const getLanguageLabel = (value) =>
  editorLanguages.find((mode) => mode.value === value).label;

export const editorThemes = [
  { value: "monokai", label: "monokai" },
  { value: "github", label: "github" },
  { value: "tomorrow", label: "tomorrow" },
  { value: "dracula", label: "dracula" },
  { value: "kuroir", label: "kuroir" },
  { value: "twilight", label: "twilight" },
  { value: "xcode", label: "xcode" },
  { value: "textmate", label: "textmate" },
  { value: "solarized_dark", label: "solarized dark" },
  { value: "solarized_light", label: "solarized light" },
  { value: "terminal", label: "terminal" },
];

export const getEditorLabel = (value) =>
  editorThemes.find((theme) => theme.value === value).label;
