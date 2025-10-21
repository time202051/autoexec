const { spawn } = require("child_process");

// 定义项目路径和要打开的文件
const projectPath = "D:\\ljp-github\\base-component"; // 替换为你的项目路径

// 启动 Cursor 编辑器并打开文件
const cursor = spawn(
  "C:\\Users\\lijiapeng\\AppData\\Local\\Programs\\cursor\\Cursor.exe",
  [projectPath],
  {
    shell: true,
  }
);

cursor.stdout.on("data", (data) => {
  console.log(`Cursor 标准输出: ${data}`);
});

cursor.stderr.on("data", (data) => {
  console.error(`Cursor 错误输出: ${data}`);
});
