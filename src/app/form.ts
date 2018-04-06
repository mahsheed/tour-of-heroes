export class Form {
    constructor(name, address, citystatecountry, 
        zipcode, phone, creditcard, exp)
    {
        this.name = name;
        this.address = address;
        this.citystatecountry = citystatecountry;
        this.zipcode = zipcode;
        this.phone = phone;
        this.creditcard = creditcard;
        this.exp = exp;
    }
    public name: string;
    public address: string;
    public citystatecountry: string;
    public zipcode: string;
    public phone: string;
    public creditcard: string;
    public exp: string;
}