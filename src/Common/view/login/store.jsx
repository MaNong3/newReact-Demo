import { observable, computed } from "mobx";
import { StoreExtends } from '../../Plugins/store.extends'
export class BankList extends StoreExtends {
    @observable price = 0;
    @observable amount = 1;
    @computed get total() {
        return this.price * this.amount;
    }
}
export default new BankList()
