/**
 * Created by i2max-YunsuSong on 2022-07-06.
 */

import {LightningElement} from 'lwc';

export default class AccountFinder extends LightningElement {
    annualRevenue = null;
    handleChange(event){
        this.annualRevenue =event.detail.value;
    }
    reset(){
        this.annualRevenue = null;
    }
}