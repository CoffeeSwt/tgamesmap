import {
  BoxGeometry,
  Mesh,
  MeshBasicMaterial,
  PerspectiveCamera,
  Scene,
  WebGLRenderer,
} from "three";

export class BasicEngine {
  private renderer: WebGLRenderer;
  public scene: Scene;
  public camera: PerspectiveCamera;
  constructor(dom?: HTMLElement) {
    this.renderer = new WebGLRenderer({
      antialias: true,
    });
    this.scene = new Scene();
    this.camera = new PerspectiveCamera();
    if (dom) this.mountDom(dom);
    return this;
  }

  mountDom(dom: HTMLElement) {
    const updateRenderParms = () => {
      this.camera.aspect = dom.offsetWidth / dom.offsetHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(dom.offsetWidth, dom.offsetHeight);
    };
    const domResizeObserver = new ResizeObserver(() => {
      // console.log("size changed");
      updateRenderParms()
      this.render();
    });
    const setDefalutConfigViaDom = (dom: HTMLElement) => {
      this.camera.fov = 50;
      this.camera.near = 0.1;
      this.camera.far = 1000;
      this.camera.position.set(20, 20, 20);
      this.camera.lookAt(0, 0, 0);
      dom.appendChild(this.renderer.domElement);
      updateRenderParms()
      domResizeObserver.observe(dom);
    };
    setDefalutConfigViaDom(dom);
    return this;
  }
  render() {
    this.renderer.render(this.scene, this.camera);
    return this;
  }
  addTestBox() {
    this.scene.add(
      new Mesh(
        new BoxGeometry(10, 10, 10),
        new MeshBasicMaterial({ color: "#dd06ff" })
      )
    );
    return this;
  }
}
