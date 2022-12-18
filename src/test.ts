// 0)install typescript compiler globallyh in your machaine (npm i -g tsc)
// 1)create and clone repo to local
// 2)under your project(repo) execute tsc --init  (create tscongif.json)
// 3)npm init -y
// 4)create 2 folder src and dist(dist for js build file)
// 5)in tsconfig .json add dist directory as outDir  ("./dist")
// 6)create index.html file in root and add .js file from dist folder(as script) to see output on browser
// 7)to build(distribution file) execute npx tsc

function getName(name: string): string {
  return name;
}

getName("Kiran");

function getVal(val: number | string | boolean) {
  if (typeof val == "number") {
    return val;
  }
  if (typeof val == "boolean") {
    return val;
  } else {
    return val;
  }
}
