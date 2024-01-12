console.log("********************Step 1********************************");

function Bank(bankName, location, ifscCode, branchCode) {
    this.bankName = bankName;
    this.location = location;
    this.ifscCode = ifscCode;
    this.branchCode = branchCode;
}

const myBank = new Bank("Cannara Bank", "Karnataka", "CBNB002754", "CBN001");
console.log(myBank);

console.log("********************Step 2********************************");

Bank.prototype.openTime = "9 AM IST";
const yesBank = new Bank("Yes Bank", "Mumbai", "YES00123", "YESB101");
const sbiBank = new Bank("SBI Bank", "Solapur", "SBI854456", "SBI201");
const mahBank = new Bank("Mahindra Bank", "Pune", "MAH45789", "MHMB301");
const axisBank = new Bank("Axis Bank", "Kolhapur", "AXIS11321", "AXI401");

//  meaningful messages//
console.log("Bank Details:");
console.log(`- Yes Bank: ${yesBank.bankName}, ${yesBank.location}, ${yesBank.ifscCode}, ${yesBank.branchCode}`);
console.log(`- SBI Bank: ${sbiBank.bankName}, ${sbiBank.location}, ${sbiBank.ifscCode}, ${sbiBank.branchCode}`);
console.log(`- Mahindra Bank: ${mahBank.bankName}, ${mahBank.location}, ${mahBank.ifscCode}, ${mahBank.branchCode}`);
console.log(`- Axis Bank: ${axisBank.bankName}, ${axisBank.location}, ${axisBank.ifscCode}, ${axisBank.branchCode}`);

console.log("********************Step 3********************************");

Bank.prototype.openTime = "9 AM IST";


//  meaningful messages including openTime//
console.log("Bank Details:");
console.log(`- Yes Bank: ${yesBank.bankName}, ${yesBank.location}, ${yesBank.ifscCode}, ${yesBank.branchCode}, Opens at ${yesBank.openTime}`);
console.log(`- SBI Bank: ${sbiBank.bankName}, ${sbiBank.location}, ${sbiBank.ifscCode}, ${sbiBank.branchCode}, Opens at ${sbiBank.openTime}`);
console.log(`- Mahindra Bank: ${mahBank.bankName}, ${mahBank.location}, ${mahBank.ifscCode}, ${mahBank.branchCode}, Opens at ${mahBank.openTime}`);
console.log(`- Axis Bank: ${axisBank.bankName}, ${axisBank.location}, ${axisBank.ifscCode}, ${axisBank.branchCode}, Opens at ${axisBank.openTime}`);

console.log("********************Step 4********************************");
Bank.prototype.closeTime = "6 PM IST";

//  meaningful messages including  closeTime//
console.log("Bank Details:");
console.log(`- Yes Bank: ${yesBank.bankName}, ${yesBank.location}, ${yesBank.ifscCode}, ${yesBank.branchCode},  Closes at ${yesBank.closeTime}`);
console.log(`- SBI Bank: ${sbiBank.bankName}, ${sbiBank.location}, ${sbiBank.ifscCode}, ${sbiBank.branchCode},  Closes at ${sbiBank.closeTime}`);
console.log(`- Mahindra Bank: ${mahBank.bankName}, ${mahBank.location}, ${mahBank.ifscCode}, ${mahBank.branchCode},  Closes at ${mahBank.closeTime}`);
console.log(`- Axis Bank: ${axisBank.bankName}, ${axisBank.location}, ${axisBank.ifscCode}, ${axisBank.branchCode},  Closes at ${axisBank.closeTime}`);

console.log("********************Step 5********************************");
console.log(`SBI Bank Details:`);
console.log(`- Bank Name: ${sbiBank.bankName}`);
console.log(`- Location: ${sbiBank.location}`);
console.log(`- IFSC Code: ${sbiBank.ifscCode}`);
console.log(`- Branch Code: ${sbiBank.branchCode}`);
console.log(`- Opens at: ${sbiBank.openTime}`);
console.log(`- Closes at: ${sbiBank.closeTime}`);

console.log("********************Step 6********************************");
console.log(`Axis Bank Details:`);
console.log(`- Bank Name: ${axisBank.bankName}`);
console.log(`- Location: ${axisBank.location}`);
console.log(`- IFSC Code: ${axisBank.ifscCode}`);
console.log(`- Branch Code: ${axisBank.branchCode}`);
console.log(`- Closes at: ${axisBank.closeTime}`);

console.log("********************Step 7********************************");
console.log(`Yes Bank Details:`);
console.log(`- Bank Name: ${yesBank.bankName}`);
console.log(`- Location: ${yesBank.location}`);
console.log(`- IFSC Code: ${yesBank.ifscCode}`);
console.log(`- Branch Code: ${yesBank.branchCode}`);
console.log(`- Opens at: ${yesBank.openTime}`);