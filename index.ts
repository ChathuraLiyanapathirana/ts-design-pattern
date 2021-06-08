class FacadeClass {
  private instanceA: SystemA;
  private instanceB: SystemB;
  private instanceC: SystemC;

  public constructor(
    instanceA: SystemA,
    instanceB: SystemB,
    instanceC: SystemC
  ) {
    this.instanceA = instanceA;
    this.instanceB = instanceB;
    this.instanceC = instanceC;
  }

  public fullProcess() {
    let process: string = '';
    process += this.instanceA.operation1();
    process += this.instanceB.operation2();
    process += this.instanceC.operation3();
    return process;
  }
}

class SystemA {
  public operation1(): string {
    return 'operation - 1 Completed!</br>';
  }
}

class SystemB {
  public operation2(): string {
    return 'operation - 2 Completed!</br>';
  }
}

class SystemC {
  public operation3(): string {
    return 'operation - 3 Completed!';
  }
}

const testFunction = () => {
  const instanceA: SystemA = new SystemA();
  const instanceB: SystemB = new SystemB();
  const instanceC: SystemC = new SystemC();

  const testFacade: FacadeClass = new FacadeClass(
    instanceA,
    instanceB,
    instanceC
  );

  const appDiv: HTMLElement = document.getElementById('app');
  appDiv.innerHTML = `${testFacade.fullProcess()}`;
};

testFunction();
