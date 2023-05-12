##webGl开发
###着色器
    GLSL ES着色器是已字符串的形式存在在js中的
    着色器就是让开发者编写一段程序，用来代替固定渲染管线，用来处理图形的渲染
####顶点着色器
    通过计算获取位置
    可以理解为一个个坐标
####片元着色器
    通过逐片元处理程序，通过计算获取颜色信息
    可以理解为一个个像素
###开发步骤
    1.编写着色器源码
    ```
    const VERTEX_SHADER_SOURCE = `
        // 必须存在的主函数
        void main() {
            // 点的坐标
            gl_Position = vec4(0.0, 0.0, 0.0, 1.0);
            // 点的大小
            gl_PointSize = 50.0;
        }
    `
    // 片元着色器
    // gl_fragColor = vec4(r, g, b, a)
    const FRAGMENT_SHADER_SOURCE = `
        void main() {
            // 点的颜色
            gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
        }
    `
    ```
    2.创建着色器
    ```
    const vertexShader = gl.createShader(gl.VERTEX_SHADER)
    const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER)
    ```
    3.关联着色器
    ```
    gl.shaderSource(vertexShader, VERTEX_SHADER_SOURCE)
    gl.shaderSource(fragmentShader, FRAGMENT_SHADER_SOURCE)
    ```
    4.编译着色器
    ```
    gl.compileShader(vertexShader)
    gl.compileShader(fragmentShader)
    ```
    5.创建程序对象
    ```
    const program = gl.createProgram()

    gl.attachShader(program, vertexShader)
    gl.attachShader(program, fragmentShader)

    gl.linkProgram(program)
    gl.useProgram(program)
    ```
    6.执行绘制
    ```
    // 执行绘制 gl.drawArrays(绘制的图形是什么, 从哪开始, 使用几个顶点)
    gl.drawArrays(gl.POINTS, 0, 1)
    gl.drawArrays(gl.LINES, 0, 1)
    gl.drawArrays(gl.TRIANGLES) // 三角形triangles
    ```
##webGl开源框架
    1. Three.js javaScript 3D webGl库
    2. Babylon.js web3D 图形引擎
    3. kickJs web的开源图形和游戏引擎
    4. ClayJs 构建可扩展的web3D程序
    5. PlayCanvas 网络游戏和3D图形引擎
    6. WebGlStudio和Litescence web图形编辑器和创建器
    7. Luma 3d可视化库
    8. A-Frame VR框架

