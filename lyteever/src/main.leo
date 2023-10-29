// The 'leo_nft' program.
program lyteever.aleo {
    struct medRecord {
        userID: u128,
        firstName: u128,
        lastName: u128,
        yearOfBirth: u128,
        dayOfBirth: u128,
        monthOfBirth: u128,
        gender:u128,
        placeOfBirth: u128,
        SSN: u128,
        medHistory: u128,
    }

    struct hospitalArray{
        hospital1: address,
        hospital2: address,
        hospital3: address,
        hospital4: address,
        hospital5: address,

    }
    record NFT {
        owner: address,
        data: u128
    }

    transition mint (receiver: address, recordData: u128) -> NFT{
    //transition mint (receiver: address, recordData: medRecord) -> NFT{
        
        //assert
        let h: hospitalArray = hospitalArray{
            hospital1: aleo1awk04hpy4xgtr7hun8rdtrvjxmwypccg4w29e32ymazv2d25h5zqy7ceut,
            hospital2: aleo1awk04hpy4xgtr7hun8rdtrvjxmwypccg4w29e32ymazv2d25h5zqy7ceut,
            hospital3: aleo1awk04hpy4xgtr7hun8rdtrvjxmwypccg4w29e32ymazv2d25h5zqy7ceut,
            hospital4: aleo1awk04hpy4xgtr7hun8rdtrvjxmwypccg4w29e32ymazv2d25h5zqy7ceut,
            hospital5: aleo1awk04hpy4xgtr7hun8rdtrvjxmwypccg4w29e32ymazv2d25h5zqy7ceut,
        };
        let found:bool = false;
        if (self.caller == h.hospital1 || self.caller == h.hospital2 || self.caller == h.hospital3 || self.caller == h.hospital4 || self.caller == h.hospital5){
            found = true;
        }

        assert_eq(found, true);

        return NFT {
            owner: receiver,
            data: recordData,
        };
    }


}