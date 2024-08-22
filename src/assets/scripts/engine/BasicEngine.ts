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
  constructor(public dom?: HTMLElement) {
    this.renderer = new WebGLRenderer();
    this.scene = new Scene();
    this.camera = new PerspectiveCamera();
    this.scene.add(
      new Mesh(
        new BoxGeometry(10, 10, 10),
        new MeshBasicMaterial({ color: "#fff" })
      )
    );
  }
  mountDom(dom: HTMLElement) {
    this.dom = dom;
  }
  render() {
    this.renderer.render(this.scene, this.camera);
  }
}
