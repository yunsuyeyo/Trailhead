/**
 * Created by i2max-YunsuSong on 2022-07-06.
 */

import { LightningElement, wire } from 'lwc';
import queryAccountsByEmployeeNumber from '@salesforce/apex/AccountListControllerLwc.queryAccountsByEmployeeNumber';
export default class AccountSearch extends LightningElement {
    numberOfEmployees = null;
    handleChange(event){
        this.numberOfEmployees = event.detail.value;
    }
    reset(){
        this.numberOfEmployees =null;
    }

    @wire(queryAccountsByEmployeeNumber, {numberOfEmployees:'$numberOfEmployees'})
    accounts;
}