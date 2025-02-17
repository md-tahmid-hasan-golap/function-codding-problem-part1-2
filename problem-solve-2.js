function addGmail(gmail){

    if(!gmail.includes("@")){
        return "Invalid Email"
    }
    const splite = gmail.split("@");
    const userName = splite[0];
    const domainName = splite[1];
    const result = userName + " sent you an email from " + domainName;
    return result

}

const names = "golap.ph@gmail.com"
const output  = addGmail(names);
console.log(output)