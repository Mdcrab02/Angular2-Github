export class NamesList {
    private names = ['Mike Crabtree'];

    get() {
        return this.names;
    }
    add(value: string) {
        this.names.push(value);
    }
}
