/**
 * Created by i2max-YunsuSong on 2022-07-06.
 */

public with sharing class AccountSearchController {
    public Integer numberOfEmployees {get; set;}
    public void reset(){
        this.numberOfEmployees = null;
    }
}