import {reactive, ref, toRefs} from "vue";

export function useMousePositionInWidget(a = window) {
    //toRefs要求传入一个响应式对象
    const position = reactive({
        'x': 0,
        'y': 0
    })
    //为控件添加侦听器
    a.addEventListener('mousemove', (event) => {
        position.x = event.offsetX
        position.y = event.offsetY
    })
    //传入响应式对象，返回普通对象但属性为Ref响应式
    return toRefs(position)
}