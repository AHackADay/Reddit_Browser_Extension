//TODO: At the minute the username is briefly there on page reload before this kicks in
usernameOnRegularPage = document.evaluate("//span[contains(@class,'user')]", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
usernameOnRegularPage.innerHTML = "" ;

//Extension will only fire on reddit .com so it can't fire on other web apps that match the pattern below 
if(document.URL.indexOf("/user/") > -1){
usernameTopLeftOfProfilePage = document.evaluate("//span[contains(@class,'pagename selected')]", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
usernameTopLeftOfProfilePage.innerHTML = "";

//TODO: this will hide for every user not just the logged in user
usernameOnTopRight = document.evaluate("//div[contains(@class,'titlebox')]", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
usernameOnTopRight.innerHTML = "";
}
