let pronoun = ['el', 'la', 'los', 'the'];
let adj = ['great', 'big', 'super', 'magnifico', 'mejor'];
let noun = ['jogger', 'racoon', 'jaguar', 'luna', 'orca', 'mono'];
let domainExtensions = ['.com', '.org', '.cl'];

function domainGeneratorList() {
    let domainList = [];
    for (let i = 0; i < pronoun.length; i++) {
        for (let j = 0; j < adj.length; j++) {
            for (let k = 0; k < noun.length; k++) {
                for (let r = 0; r < domainExtensions.length; r++) {
                    let domain = pronoun[i] + adj[j] + noun[k] + domainExtensions[r];
                    domainList.push(domain);
                }
            }
        }
    }
    return domainList;
}

let domains = domainGeneratorList();
console.log(domains);