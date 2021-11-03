var newAccount = (function() {
    var listAccounts = {};
    function addAccount(name, deposit) { //private inner function
    listAccounts += {
        "Account name: ":name,
        "Balance: ":deposit
    }; }
    return {
    createAccount: function() {
        addAccount(document.getElementById("name").value, document.getElementById("deposit").value)
    },
    list: function() {
        return listAccounts;
    }
    } 

})();