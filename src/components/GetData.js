import setUrl from './test.csv';
export async function getData() {
    const row = []
    const statCount = []
    const statusA = []
    const uniqueStatus = []
    const dataS = [];
    const resp = await fetch(setUrl);
    const rev = await resp.text();
    const col = rev.split('\n');
    for (var i = 0; i < col.length; i++) {
        row.push(col[i]);
    }
    for (let i = 0; i < row.length; i++) {
        const stat = row[i].split(',');
        statusA.push(stat[1]);
        if (!uniqueStatus.includes(stat[1])) {
            uniqueStatus.push(stat[1]);
        }
    }
    uniqueStatus.shift();
    for (let i = 0; i < uniqueStatus.length; i++) {
        var count = 0
        for (let j = 0; j < statusA.length; j++) {
            if (uniqueStatus[i] === (statusA[j])) {
                count++;
            }
        }
        statCount[i] = count;
    }
    dataS.push(uniqueStatus);
    dataS.push(statCount);
    return dataS
}
