public with sharing class AccountListControllerLwc {
    @AuraEnabled(Cacheable=true)
    public static List<Account> queryAccountsByEmployeeNumber(Integer numberOfEmployees) {
        return [
                SELECT Name
                FROM Account
                WHERE NumberOfEmployees >= :numberOfEmployees
        ];
    }
}
