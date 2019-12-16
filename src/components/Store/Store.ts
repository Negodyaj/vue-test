import { Vue, Component } from "vue-property-decorator";
// https://alligator.io/vuejs/typescript-class-components/


@Component
export default class StorePageComponent extends Vue {
    msg: string = 'Привет';
    name: string = 'Антошка';
    someData: string;

    get greeting(): string {
        return this.msg + ' ' + this.name + '!'
    }

    beforeMount() {
        this.someData = 'Тут пусто';
    }

    updateMyProperty($event) {
        this.someData = $event.target.value
    }
}
