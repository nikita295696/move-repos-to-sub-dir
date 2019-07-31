export class ScriptGenerator {
    public static setScriptNode(element: Node, src: string) {
        const script = document.createElement('script');
        script.setAttribute('type', 'application/javascript');
        script.setAttribute('src', src);
        element.appendChild(script);
    }
}
