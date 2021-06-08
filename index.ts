class Singleton {
  private static instance: Singleton;

  private constructor() {}

  public static getInstance(): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }
    return Singleton.instance;
  }
}

const testFunction = () => {
  const instance1 = Singleton.getInstance();
  const instance2 = Singleton.getInstance();

  const appDiv: HTMLElement = document.getElementById('app');
  appDiv.innerHTML = `(instance1 === instance2) -> ${instance1 === instance2}`;
};

testFunction();
