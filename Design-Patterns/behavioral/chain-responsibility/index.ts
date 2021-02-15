
interface IHandler {
    nextInChain(handler: IHandler): void
    calculate(value: number): void
}
