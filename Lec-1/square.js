let n = 10, row = 0;

while (row < n) {
    let col = 0;

    while (col < n) {
        process.stdout.write('* ');
        col += 1;
    }
    process.stdout.write('\n');

    row++;
}