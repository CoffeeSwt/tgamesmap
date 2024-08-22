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
  constructor(public dom: HTMLElement) {
    this.renderer = new WebGLRenderer({
      antialias: true,
    });
    this.renderer.setSize(dom.offsetWidth, dom.offsetHeight);
    dom.appendChild(this.renderer.domElement);
    this.scene = new Scene();
    this.camera = new PerspectiveCamera(
      90,
      dom.offsetWidth / dom.offsetHeight,
      1,
      1000
    );
    this.scene.add(
      new Mesh(
        new BoxGeometry(10, 10, 10),
        new MeshBasicMaterial({ color: "#fff" })
      )
    );
    this.camera.position.set(20, 20, 20);
    this.camera.lookAt(0, 0, 0);
    return this;
  }
  render() {
    this.renderer.render(this.scene, this.camera);
  }
}
