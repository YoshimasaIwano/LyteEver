program lyteever.aleo;

struct medRecord:
    userID as u128;
    firstName as u128;
    lastName as u128;
    yearOfBirth as u128;
    dayOfBirth as u128;
    monthOfBirth as u128;
    gender as u128;
    placeOfBirth as u128;
    SSN as u128;
    medHistory as u128;

struct hospitalArray:
    hospital1 as address;
    hospital2 as address;
    hospital3 as address;
    hospital4 as address;
    hospital5 as address;

record NFT:
    owner as address.private;
    data as u128.private;


function mint:
    input r0 as address.private;
    input r1 as u128.private;
    cast aleo1awk04hpy4xgtr7hun8rdtrvjxmwypccg4w29e32ymazv2d25h5zqy7ceut aleo1awk04hpy4xgtr7hun8rdtrvjxmwypccg4w29e32ymazv2d25h5zqy7ceut aleo1awk04hpy4xgtr7hun8rdtrvjxmwypccg4w29e32ymazv2d25h5zqy7ceut aleo1awk04hpy4xgtr7hun8rdtrvjxmwypccg4w29e32ymazv2d25h5zqy7ceut aleo1awk04hpy4xgtr7hun8rdtrvjxmwypccg4w29e32ymazv2d25h5zqy7ceut into r2 as hospitalArray;
    is.eq self.caller r2.hospital1 into r3;
    is.eq self.caller r2.hospital2 into r4;
    or r3 r4 into r5;
    is.eq self.caller r2.hospital3 into r6;
    or r5 r6 into r7;
    is.eq self.caller r2.hospital4 into r8;
    or r7 r8 into r9;
    is.eq self.caller r2.hospital5 into r10;
    or r9 r10 into r11;
    ternary r11 true false into r12;
    assert.eq r12 true;
    cast r0 r1 into r13 as NFT.record;
    output r13 as NFT.record;
