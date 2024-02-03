const { execSync } = require("child_process");

const commandRows = [
  // `def f(x):return 1`,
  // `print(f(1))`,
  `import ast, json; ast_to_json = lambda node: {field: ast_to_json(getattr(node, field)) for field in node._fields} | {'nodeType': type(node).__name__} if isinstance(node, ast.AST) else [ast_to_json(item) for item in node] if isinstance(node, list) else node; print(json.dumps(ast_to_json(ast.parse(open(r'C:/Users/iniad/INIADts/vscode-extension-exercise/test-workspace/djangoApp/views.py').read()))))
  `,
  // `import ast`,
  // `import json`,
  // `def ast_to_json(node): return {field: ast_to_json(getattr(node, field)) for field in node._fields} | {'nodeType': type(node).__name__} if isinstance(node, ast.AST) else [ast_to_json(item) for item in node] if isinstance(node, list) else node`,
  // `print(open(r'C:/Users/iniad/INIADts/vscode-extension-exercise/test-workspace/djangoApp/views.py').read())`,
  // `import ast`,
  // `import json`,
  // `def ast_to_json(node):`,
  // `    if isinstance(node, ast.AST):`,
  // `        field = {`,
  // `            field: ast_to_json(getattr(node, field)) for field in node._fields`,
  // `        }`,
  // `        field['nodeType'] = type(node).__name__`,
  // `        return field`,
  // `    elif isinstance(node, list):`,
  // `        return [ast_to_json(item) for item in node]`,
  // `    else:`,
  // `        return node`,
  // //TODO windows で 'D:\d:\'となる根本的な原因を探る
  // `print(json.dumps(ast_to_json(ast.parse(open(r'C:/Users/iniad/INIADts/vscode-extension-exercise/test-workspace/djangoApp/views.py').read()))))`,
];
const command = `python3 -c "${commandRows.join(";")}"`;

console.log(command);
console.log(
  execSync(command, {
    encoding: "utf-8",
  })
);

const path = require("path");
console.log(path.basename(__dirname));
