(this["webpackJsonpbnb-ride"] = this["webpackJsonpbnb-ride"] || []).push([
    [0],
    {
        366: function(e, t, n) {},
        367: function(e, t, n) {},
        381: function(e, t) {},
        385: function(e, t) {},
        387: function(e, t) {},
        391: function(e, t) {},
        392: function(e, t) {},
        417: function(e, t) {},
        419: function(e, t) {},
        428: function(e, t) {},
        430: function(e, t) {},
        441: function(e, t) {},
        443: function(e, t) {},
        458: function(e, t) {},
        491: function(e, t) {},
        492: function(e, t) {},
        560: function(e, t) {},
        565: function(e, t) {},
        567: function(e, t) {},
        574: function(e, t) {},
        575: function(e, t) {},
        600: function(e, t) {},
        607: function(e, t) {},
        668: function(e, t) {},
        78: function(e, t, n) {
            e.exports = {
                statsticItem: "StatsticItem_statsticItem__14Iir",
                content: "StatsticItem_content__2Nt2-",
                data: "StatsticItem_data__21cYo",
                value: "StatsticItem_value__1m35m",
                dollar: "StatsticItem_dollar__ICKoc",
                title: "StatsticItem_title__2IRrf",
            };
        },
        828: function(e, t, n) {
            "use strict";
            n.r(t);
            var a = n(2),
                s = n(137),
                i = n.n(s),
                r = (n(366), n(11)),
                c = (n(367), n(77)),
                o = n(19),
                u = n(15),
                l = n(5),
                d = n(1),
                p = n.n(d),
                b = n(140),
                m = n.n(b),
                f = n(196),
                y = n.n(f),
                j = n(359),
                h = (n.p, n.p, n.p, n.p, "0x17dBAF575d69EC0C34C3f2097953372165fA51Ed"),
                x = "1.03",
                O = {
                    walletconnect: {
                        package: j.a,
                        options: {
                            rpc: {
                                1: "https://bsc-dataseed1.binance.org",
                                56: "https://bsc-dataseed1.binance.org",
                            },
                        },
                    },
                },
                v = [{
                        inputs: [],
                        payable: !1,
                        stateMutability: "nonpayable",
                        type: "constructor",
                    },
                    {
                        anonymous: !1,
                        inputs: [{
                                indexed: !0,
                                internalType: "address",
                                name: "owner",
                                type: "address",
                            },
                            {
                                indexed: !0,
                                internalType: "address",
                                name: "spender",
                                type: "address",
                            },
                            {
                                indexed: !1,
                                internalType: "uint256",
                                name: "value",
                                type: "uint256",
                            },
                        ],
                        name: "Approval",
                        type: "event",
                    },
                    {
                        anonymous: !1,
                        inputs: [{
                                indexed: !0,
                                internalType: "address",
                                name: "previousOwner",
                                type: "address",
                            },
                            {
                                indexed: !0,
                                internalType: "address",
                                name: "newOwner",
                                type: "address",
                            },
                        ],
                        name: "OwnershipTransferred",
                        type: "event",
                    },
                    {
                        anonymous: !1,
                        inputs: [{
                                indexed: !0,
                                internalType: "address",
                                name: "from",
                                type: "address",
                            },
                            {
                                indexed: !0,
                                internalType: "address",
                                name: "to",
                                type: "address",
                            },
                            {
                                indexed: !1,
                                internalType: "uint256",
                                name: "value",
                                type: "uint256",
                            },
                        ],
                        name: "Transfer",
                        type: "event",
                    },
                    {
                        constant: !0,
                        inputs: [],
                        name: "_decimals",
                        outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
                        payable: !1,
                        stateMutability: "view",
                        type: "function",
                    },
                    {
                        constant: !0,
                        inputs: [],
                        name: "_name",
                        outputs: [{ internalType: "string", name: "", type: "string" }],
                        payable: !1,
                        stateMutability: "view",
                        type: "function",
                    },
                    {
                        constant: !0,
                        inputs: [],
                        name: "_symbol",
                        outputs: [{ internalType: "string", name: "", type: "string" }],
                        payable: !1,
                        stateMutability: "view",
                        type: "function",
                    },
                    {
                        constant: !0,
                        inputs: [
                            { internalType: "address", name: "owner", type: "address" },
                            { internalType: "address", name: "spender", type: "address" },
                        ],
                        name: "allowance",
                        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
                        payable: !1,
                        stateMutability: "view",
                        type: "function",
                    },
                    {
                        constant: !1,
                        inputs: [
                            { internalType: "address", name: "spender", type: "address" },
                            { internalType: "uint256", name: "amount", type: "uint256" },
                        ],
                        name: "approve",
                        outputs: [{ internalType: "bool", name: "", type: "bool" }],
                        payable: !1,
                        stateMutability: "nonpayable",
                        type: "function",
                    },
                    {
                        constant: !0,
                        inputs: [
                            { internalType: "address", name: "account", type: "address" },
                        ],
                        name: "balanceOf",
                        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
                        payable: !1,
                        stateMutability: "view",
                        type: "function",
                    },
                    {
                        constant: !1,
                        inputs: [
                            { internalType: "uint256", name: "amount", type: "uint256" },
                        ],
                        name: "burn",
                        outputs: [{ internalType: "bool", name: "", type: "bool" }],
                        payable: !1,
                        stateMutability: "nonpayable",
                        type: "function",
                    },
                    {
                        constant: !0,
                        inputs: [],
                        name: "decimals",
                        outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
                        payable: !1,
                        stateMutability: "view",
                        type: "function",
                    },
                    {
                        constant: !1,
                        inputs: [
                            { internalType: "address", name: "spender", type: "address" },
                            {
                                internalType: "uint256",
                                name: "subtractedValue",
                                type: "uint256",
                            },
                        ],
                        name: "decreaseAllowance",
                        outputs: [{ internalType: "bool", name: "", type: "bool" }],
                        payable: !1,
                        stateMutability: "nonpayable",
                        type: "function",
                    },
                    {
                        constant: !0,
                        inputs: [],
                        name: "getOwner",
                        outputs: [{ internalType: "address", name: "", type: "address" }],
                        payable: !1,
                        stateMutability: "view",
                        type: "function",
                    },
                    {
                        constant: !1,
                        inputs: [
                            { internalType: "address", name: "spender", type: "address" },
                            { internalType: "uint256", name: "addedValue", type: "uint256" },
                        ],
                        name: "increaseAllowance",
                        outputs: [{ internalType: "bool", name: "", type: "bool" }],
                        payable: !1,
                        stateMutability: "nonpayable",
                        type: "function",
                    },
                    {
                        constant: !1,
                        inputs: [
                            { internalType: "uint256", name: "amount", type: "uint256" },
                        ],
                        name: "mint",
                        outputs: [{ internalType: "bool", name: "", type: "bool" }],
                        payable: !1,
                        stateMutability: "nonpayable",
                        type: "function",
                    },
                    {
                        constant: !0,
                        inputs: [],
                        name: "name",
                        outputs: [{ internalType: "string", name: "", type: "string" }],
                        payable: !1,
                        stateMutability: "view",
                        type: "function",
                    },
                    {
                        constant: !0,
                        inputs: [],
                        name: "owner",
                        outputs: [{ internalType: "address", name: "", type: "address" }],
                        payable: !1,
                        stateMutability: "view",
                        type: "function",
                    },
                    {
                        constant: !1,
                        inputs: [],
                        name: "renounceOwnership",
                        outputs: [],
                        payable: !1,
                        stateMutability: "nonpayable",
                        type: "function",
                    },
                    {
                        constant: !0,
                        inputs: [],
                        name: "symbol",
                        outputs: [{ internalType: "string", name: "", type: "string" }],
                        payable: !1,
                        stateMutability: "view",
                        type: "function",
                    },
                    {
                        constant: !0,
                        inputs: [],
                        name: "totalSupply",
                        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
                        payable: !1,
                        stateMutability: "view",
                        type: "function",
                    },
                    {
                        constant: !1,
                        inputs: [
                            { internalType: "address", name: "recipient", type: "address" },
                            { internalType: "uint256", name: "amount", type: "uint256" },
                        ],
                        name: "transfer",
                        outputs: [{ internalType: "bool", name: "", type: "bool" }],
                        payable: !1,
                        stateMutability: "nonpayable",
                        type: "function",
                    },
                    {
                        constant: !1,
                        inputs: [
                            { internalType: "address", name: "sender", type: "address" },
                            { internalType: "address", name: "recipient", type: "address" },
                            { internalType: "uint256", name: "amount", type: "uint256" },
                        ],
                        name: "transferFrom",
                        outputs: [{ internalType: "bool", name: "", type: "bool" }],
                        payable: !1,
                        stateMutability: "nonpayable",
                        type: "function",
                    },
                    {
                        constant: !1,
                        inputs: [
                            { internalType: "address", name: "newOwner", type: "address" },
                        ],
                        name: "transferOwnership",
                        outputs: [],
                        payable: !1,
                        stateMutability: "nonpayable",
                        type: "function",
                    },
                ],
                g = n(96),
                w = n.n(g),
                N = {
                    bnb: {
                        contract: "0xe80C6273bB168b180EC39A9d76d4152dB52E25E6",
                        color: "FFC435",
                        fullName: "BNB",
                        ABI: [{
                                inputs: [{
                                        internalType: "address payable",
                                        name: "ceoAddr",
                                        type: "address",
                                    },
                                    {
                                        internalType: "address payable",
                                        name: "devAddr",
                                        type: "address",
                                    },
                                    { internalType: "uint256", name: "start", type: "uint256" },
                                ],
                                stateMutability: "nonpayable",
                                type: "constructor",
                            },
                            {
                                anonymous: !1,
                                inputs: [{
                                        indexed: !0,
                                        internalType: "address",
                                        name: "user",
                                        type: "address",
                                    },
                                    {
                                        indexed: !1,
                                        internalType: "uint256",
                                        name: "totalAmount",
                                        type: "uint256",
                                    },
                                ],
                                name: "FeePayed",
                                type: "event",
                            },
                            {
                                anonymous: !1,
                                inputs: [{
                                        indexed: !1,
                                        internalType: "uint256",
                                        name: "high",
                                        type: "uint256",
                                    },
                                    {
                                        indexed: !1,
                                        internalType: "uint256",
                                        name: "current",
                                        type: "uint256",
                                    },
                                ],
                                name: "InitiateInsurance",
                                type: "event",
                            },
                            {
                                anonymous: !1,
                                inputs: [{
                                    indexed: !1,
                                    internalType: "uint256",
                                    name: "amount",
                                    type: "uint256",
                                }, ],
                                name: "InsuranseFeePaid",
                                type: "event",
                            },
                            {
                                anonymous: !1,
                                inputs: [{
                                        indexed: !0,
                                        internalType: "address",
                                        name: "user",
                                        type: "address",
                                    },
                                    {
                                        indexed: !1,
                                        internalType: "uint8",
                                        name: "plan",
                                        type: "uint8",
                                    },
                                    {
                                        indexed: !1,
                                        internalType: "uint256",
                                        name: "amount",
                                        type: "uint256",
                                    },
                                    {
                                        indexed: !1,
                                        internalType: "uint256",
                                        name: "time",
                                        type: "uint256",
                                    },
                                ],
                                name: "NewDeposit",
                                type: "event",
                            },
                            {
                                anonymous: !1,
                                inputs: [{
                                    indexed: !1,
                                    internalType: "address",
                                    name: "user",
                                    type: "address",
                                }, ],
                                name: "Newbie",
                                type: "event",
                            },
                            {
                                anonymous: !1,
                                inputs: [{
                                        indexed: !0,
                                        internalType: "address",
                                        name: "referrer",
                                        type: "address",
                                    },
                                    {
                                        indexed: !0,
                                        internalType: "address",
                                        name: "referral",
                                        type: "address",
                                    },
                                    {
                                        indexed: !0,
                                        internalType: "uint256",
                                        name: "level",
                                        type: "uint256",
                                    },
                                    {
                                        indexed: !1,
                                        internalType: "uint256",
                                        name: "amount",
                                        type: "uint256",
                                    },
                                ],
                                name: "RefBonus",
                                type: "event",
                            },
                            {
                                anonymous: !1,
                                inputs: [{
                                        indexed: !0,
                                        internalType: "address",
                                        name: "user",
                                        type: "address",
                                    },
                                    {
                                        indexed: !1,
                                        internalType: "uint256",
                                        name: "amount",
                                        type: "uint256",
                                    },
                                    {
                                        indexed: !1,
                                        internalType: "uint256",
                                        name: "time",
                                        type: "uint256",
                                    },
                                ],
                                name: "Withdrawn",
                                type: "event",
                            },
                            {
                                inputs: [],
                                name: "INSURANCE_CONTRACT",
                                outputs: [{
                                    internalType: "address payable",
                                    name: "",
                                    type: "address",
                                }, ],
                                stateMutability: "view",
                                type: "function",
                            },
                            {
                                inputs: [],
                                name: "INSURANCE_LOWBALANCE_PERCENT",
                                outputs: [
                                    { internalType: "uint256", name: "", type: "uint256" },
                                ],
                                stateMutability: "view",
                                type: "function",
                            },
                            {
                                inputs: [
                                    { internalType: "uint256", name: "", type: "uint256" },
                                ],
                                name: "INSURANCE_MAXBALANCE",
                                outputs: [
                                    { internalType: "uint256", name: "", type: "uint256" },
                                ],
                                stateMutability: "view",
                                type: "function",
                            },
                            {
                                inputs: [],
                                name: "INSURANCE_PERCENT",
                                outputs: [
                                    { internalType: "uint256", name: "", type: "uint256" },
                                ],
                                stateMutability: "view",
                                type: "function",
                            },
                            {
                                inputs: [],
                                name: "INSURANCE_TRIGGER_BALANCE",
                                outputs: [
                                    { internalType: "uint256", name: "", type: "uint256" },
                                ],
                                stateMutability: "view",
                                type: "function",
                            },
                            {
                                inputs: [],
                                name: "MAXIMUM_NUMBER_DEPOSITS",
                                outputs: [
                                    { internalType: "uint256", name: "", type: "uint256" },
                                ],
                                stateMutability: "view",
                                type: "function",
                            },
                            {
                                inputs: [],
                                name: "TIME_STEP",
                                outputs: [
                                    { internalType: "uint256", name: "", type: "uint256" },
                                ],
                                stateMutability: "view",
                                type: "function",
                            },
                            {
                                inputs: [
                                    { internalType: "uint256", name: "length", type: "uint256" },
                                ],
                                name: "capped",
                                outputs: [
                                    { internalType: "uint256", name: "cap", type: "uint256" },
                                ],
                                stateMutability: "pure",
                                type: "function",
                            },
                            {
                                inputs: [],
                                name: "ceoWallet",
                                outputs: [{
                                    internalType: "address payable",
                                    name: "",
                                    type: "address",
                                }, ],
                                stateMutability: "view",
                                type: "function",
                            },
                            {
                                inputs: [],
                                name: "devWallet",
                                outputs: [{
                                    internalType: "address payable",
                                    name: "",
                                    type: "address",
                                }, ],
                                stateMutability: "view",
                                type: "function",
                            },
                            {
                                inputs: [],
                                name: "getContractBalance",
                                outputs: [
                                    { internalType: "uint256", name: "", type: "uint256" },
                                ],
                                stateMutability: "view",
                                type: "function",
                            },
                            {
                                inputs: [
                                    { internalType: "uint8", name: "plan", type: "uint8" },
                                ],
                                name: "getPlanInfo",
                                outputs: [
                                    { internalType: "uint256", name: "time", type: "uint256" },
                                    { internalType: "uint256", name: "percent", type: "uint256" },
                                ],
                                stateMutability: "view",
                                type: "function",
                            },
                            {
                                inputs: [],
                                name: "getSiteInfo",
                                outputs: [{
                                        internalType: "uint256",
                                        name: "_totalInvested",
                                        type: "uint256",
                                    },
                                    {
                                        internalType: "uint256",
                                        name: "_totalBonus",
                                        type: "uint256",
                                    },
                                    {
                                        internalType: "uint256",
                                        name: "ensBalance",
                                        type: "uint256",
                                    },
                                    {
                                        internalType: "uint256",
                                        name: "ensTriggerBalance",
                                        type: "uint256",
                                    },
                                ],
                                stateMutability: "view",
                                type: "function",
                            },
                            {
                                inputs: [{
                                    internalType: "address",
                                    name: "userAddress",
                                    type: "address",
                                }, ],
                                name: "getUserAmountOfDeposits",
                                outputs: [
                                    { internalType: "uint256", name: "", type: "uint256" },
                                ],
                                stateMutability: "view",
                                type: "function",
                            },
                            {
                                inputs: [{
                                    internalType: "address",
                                    name: "userAddress",
                                    type: "address",
                                }, ],
                                name: "getUserAvailable",
                                outputs: [
                                    { internalType: "uint256", name: "", type: "uint256" },
                                ],
                                stateMutability: "view",
                                type: "function",
                            },
                            {
                                inputs: [{
                                    internalType: "address",
                                    name: "userAddress",
                                    type: "address",
                                }, ],
                                name: "getUserCheckpoint",
                                outputs: [
                                    { internalType: "uint256", name: "", type: "uint256" },
                                ],
                                stateMutability: "view",
                                type: "function",
                            },
                            {
                                inputs: [{
                                        internalType: "address",
                                        name: "userAddress",
                                        type: "address",
                                    },
                                    { internalType: "uint256", name: "index", type: "uint256" },
                                ],
                                name: "getUserDepositInfo",
                                outputs: [
                                    { internalType: "uint8", name: "plan", type: "uint8" },
                                    { internalType: "uint256", name: "percent", type: "uint256" },
                                    { internalType: "uint256", name: "amount", type: "uint256" },
                                    { internalType: "uint256", name: "start", type: "uint256" },
                                    { internalType: "uint256", name: "finish", type: "uint256" },
                                ],
                                stateMutability: "view",
                                type: "function",
                            },
                            {
                                inputs: [{
                                    internalType: "address",
                                    name: "userAddress",
                                    type: "address",
                                }, ],
                                name: "getUserDividends",
                                outputs: [
                                    { internalType: "uint256", name: "", type: "uint256" },
                                ],
                                stateMutability: "view",
                                type: "function",
                            },
                            {
                                inputs: [{
                                    internalType: "address",
                                    name: "userAddress",
                                    type: "address",
                                }, ],
                                name: "getUserDownlineCount",
                                outputs: [{
                                    internalType: "uint256[1]",
                                    name: "referrals",
                                    type: "uint256[1]",
                                }, ],
                                stateMutability: "view",
                                type: "function",
                            },
                            {
                                inputs: [{
                                    internalType: "address",
                                    name: "userAddress",
                                    type: "address",
                                }, ],
                                name: "getUserHoldBonus",
                                outputs: [
                                    { internalType: "uint256", name: "", type: "uint256" },
                                ],
                                stateMutability: "view",
                                type: "function",
                            },
                            {
                                inputs: [{
                                    internalType: "address",
                                    name: "userAddress",
                                    type: "address",
                                }, ],
                                name: "getUserInfo",
                                outputs: [{
                                        internalType: "uint256",
                                        name: "checkpoint",
                                        type: "uint256",
                                    },
                                    {
                                        internalType: "uint256",
                                        name: "totalDeposit",
                                        type: "uint256",
                                    },
                                    {
                                        internalType: "uint256",
                                        name: "totalWithdrawn",
                                        type: "uint256",
                                    },
                                    {
                                        internalType: "uint256",
                                        name: "totalReferrals",
                                        type: "uint256",
                                    },
                                    { internalType: "uint256", name: "bonus", type: "uint256" },
                                ],
                                stateMutability: "view",
                                type: "function",
                            },
                            {
                                inputs: [{
                                    internalType: "address",
                                    name: "userAddress",
                                    type: "address",
                                }, ],
                                name: "getUserReferralBonus",
                                outputs: [
                                    { internalType: "uint256", name: "", type: "uint256" },
                                ],
                                stateMutability: "view",
                                type: "function",
                            },
                            {
                                inputs: [{
                                    internalType: "address",
                                    name: "userAddress",
                                    type: "address",
                                }, ],
                                name: "getUserReferralTotalBonus",
                                outputs: [
                                    { internalType: "uint256", name: "", type: "uint256" },
                                ],
                                stateMutability: "view",
                                type: "function",
                            },
                            {
                                inputs: [{
                                    internalType: "address",
                                    name: "userAddress",
                                    type: "address",
                                }, ],
                                name: "getUserReferralWithdrawn",
                                outputs: [
                                    { internalType: "uint256", name: "", type: "uint256" },
                                ],
                                stateMutability: "view",
                                type: "function",
                            },
                            {
                                inputs: [{
                                    internalType: "address",
                                    name: "userAddress",
                                    type: "address",
                                }, ],
                                name: "getUserReferrer",
                                outputs: [
                                    { internalType: "address", name: "", type: "address" },
                                ],
                                stateMutability: "view",
                                type: "function",
                            },
                            {
                                inputs: [{
                                    internalType: "address",
                                    name: "userAddress",
                                    type: "address",
                                }, ],
                                name: "getUserTotalDeposits",
                                outputs: [
                                    { internalType: "uint256", name: "amount", type: "uint256" },
                                ],
                                stateMutability: "view",
                                type: "function",
                            },
                            {
                                inputs: [{
                                    internalType: "address",
                                    name: "userAddress",
                                    type: "address",
                                }, ],
                                name: "getUserTotalReferrals",
                                outputs: [
                                    { internalType: "uint256", name: "", type: "uint256" },
                                ],
                                stateMutability: "view",
                                type: "function",
                            },
                            {
                                inputs: [{
                                    internalType: "address",
                                    name: "userAddress",
                                    type: "address",
                                }, ],
                                name: "getUserTotalWithdrawn",
                                outputs: [
                                    { internalType: "uint256", name: "", type: "uint256" },
                                ],
                                stateMutability: "view",
                                type: "function",
                            },
                            {
                                inputs: [{
                                        internalType: "address",
                                        name: "referrer",
                                        type: "address",
                                    },
                                    { internalType: "uint8", name: "plan", type: "uint8" },
                                ],
                                name: "invest",
                                outputs: [],
                                stateMutability: "payable",
                                type: "function",
                            },
                            {
                                inputs: [],
                                name: "startDate",
                                outputs: [
                                    { internalType: "uint256", name: "", type: "uint256" },
                                ],
                                stateMutability: "view",
                                type: "function",
                            },
                            {
                                inputs: [],
                                name: "totalInvested",
                                outputs: [
                                    { internalType: "uint256", name: "", type: "uint256" },
                                ],
                                stateMutability: "view",
                                type: "function",
                            },
                            {
                                inputs: [],
                                name: "totalReferral",
                                outputs: [
                                    { internalType: "uint256", name: "", type: "uint256" },
                                ],
                                stateMutability: "view",
                                type: "function",
                            },
                            {
                                inputs: [],
                                name: "withdraw",
                                outputs: [],
                                stateMutability: "nonpayable",
                                type: "function",
                            },
                            { stateMutability: "payable", type: "receive" },
                        ],
                        title: "bnb",
                        zeroCount: 5,
                        tokenId: "binancecoin",
                        unit: "BNB",
                        min: "0.005",
                        max: "100",
                        backStyle: "bnb-back",
                        colorStyle: "bnb-color",
                        secondStyle: "bnb-primary",
                        borderStyle: "bnb-border",
                        imageUrl: "/assets/img/bnb1.png",
                    },
                    busd: {
                        contract: "0x77a55aa000addb9b6b82c9d57ac20480668bec12",
                        color: "FFC435",
                        fullName: "BNB",
                        ABI: [{
                                inputs: [{
                                        internalType: "address payable",
                                        name: "ceoAddr",
                                        type: "address",
                                    },
                                    {
                                        internalType: "address payable",
                                        name: "devAddr",
                                        type: "address",
                                    },
                                    { internalType: "uint256", name: "start", type: "uint256" },
                                ],
                                stateMutability: "nonpayable",
                                type: "constructor",
                            },
                            {
                                anonymous: !1,
                                inputs: [{
                                        indexed: !0,
                                        internalType: "address",
                                        name: "user",
                                        type: "address",
                                    },
                                    {
                                        indexed: !1,
                                        internalType: "uint256",
                                        name: "totalAmount",
                                        type: "uint256",
                                    },
                                ],
                                name: "FeePayed",
                                type: "event",
                            },
                            {
                                anonymous: !1,
                                inputs: [{
                                        indexed: !1,
                                        internalType: "uint256",
                                        name: "high",
                                        type: "uint256",
                                    },
                                    {
                                        indexed: !1,
                                        internalType: "uint256",
                                        name: "current",
                                        type: "uint256",
                                    },
                                ],
                                name: "InitiateInsurance",
                                type: "event",
                            },
                            {
                                anonymous: !1,
                                inputs: [{
                                    indexed: !1,
                                    internalType: "uint256",
                                    name: "amount",
                                    type: "uint256",
                                }, ],
                                name: "InsuranseFeePaid",
                                type: "event",
                            },
                            {
                                anonymous: !1,
                                inputs: [{
                                        indexed: !0,
                                        internalType: "address",
                                        name: "user",
                                        type: "address",
                                    },
                                    {
                                        indexed: !1,
                                        internalType: "uint8",
                                        name: "plan",
                                        type: "uint8",
                                    },
                                    {
                                        indexed: !1,
                                        internalType: "uint256",
                                        name: "amount",
                                        type: "uint256",
                                    },
                                    {
                                        indexed: !1,
                                        internalType: "uint256",
                                        name: "time",
                                        type: "uint256",
                                    },
                                ],
                                name: "NewDeposit",
                                type: "event",
                            },
                            {
                                anonymous: !1,
                                inputs: [{
                                    indexed: !1,
                                    internalType: "address",
                                    name: "user",
                                    type: "address",
                                }, ],
                                name: "Newbie",
                                type: "event",
                            },
                            {
                                anonymous: !1,
                                inputs: [{
                                        indexed: !0,
                                        internalType: "address",
                                        name: "referrer",
                                        type: "address",
                                    },
                                    {
                                        indexed: !0,
                                        internalType: "address",
                                        name: "referral",
                                        type: "address",
                                    },
                                    {
                                        indexed: !0,
                                        internalType: "uint256",
                                        name: "level",
                                        type: "uint256",
                                    },
                                    {
                                        indexed: !1,
                                        internalType: "uint256",
                                        name: "amount",
                                        type: "uint256",
                                    },
                                ],
                                name: "RefBonus",
                                type: "event",
                            },
                            {
                                anonymous: !1,
                                inputs: [{
                                        indexed: !0,
                                        internalType: "address",
                                        name: "user",
                                        type: "address",
                                    },
                                    {
                                        indexed: !1,
                                        internalType: "uint256",
                                        name: "amount",
                                        type: "uint256",
                                    },
                                    {
                                        indexed: !1,
                                        internalType: "uint256",
                                        name: "time",
                                        type: "uint256",
                                    },
                                ],
                                name: "Withdrawn",
                                type: "event",
                            },
                            {
                                inputs: [],
                                name: "INSURANCE_CONTRACT",
                                outputs: [{
                                    internalType: "address payable",
                                    name: "",
                                    type: "address",
                                }, ],
                                stateMutability: "view",
                                type: "function",
                            },
                            {
                                inputs: [],
                                name: "INSURANCE_LOWBALANCE_PERCENT",
                                outputs: [
                                    { internalType: "uint256", name: "", type: "uint256" },
                                ],
                                stateMutability: "view",
                                type: "function",
                            },
                            {
                                inputs: [
                                    { internalType: "uint256", name: "", type: "uint256" },
                                ],
                                name: "INSURANCE_MAXBALANCE",
                                outputs: [
                                    { internalType: "uint256", name: "", type: "uint256" },
                                ],
                                stateMutability: "view",
                                type: "function",
                            },
                            {
                                inputs: [],
                                name: "INSURANCE_PERCENT",
                                outputs: [
                                    { internalType: "uint256", name: "", type: "uint256" },
                                ],
                                stateMutability: "view",
                                type: "function",
                            },
                            {
                                inputs: [],
                                name: "INSURANCE_TRIGGER_BALANCE",
                                outputs: [
                                    { internalType: "uint256", name: "", type: "uint256" },
                                ],
                                stateMutability: "view",
                                type: "function",
                            },
                            {
                                inputs: [],
                                name: "MAXIMUM_NUMBER_DEPOSITS",
                                outputs: [
                                    { internalType: "uint256", name: "", type: "uint256" },
                                ],
                                stateMutability: "view",
                                type: "function",
                            },
                            {
                                inputs: [],
                                name: "TIME_STEP",
                                outputs: [
                                    { internalType: "uint256", name: "", type: "uint256" },
                                ],
                                stateMutability: "view",
                                type: "function",
                            },
                            {
                                inputs: [
                                    { internalType: "uint256", name: "length", type: "uint256" },
                                ],
                                name: "capped",
                                outputs: [
                                    { internalType: "uint256", name: "cap", type: "uint256" },
                                ],
                                stateMutability: "pure",
                                type: "function",
                            },
                            {
                                inputs: [],
                                name: "ceoWallet",
                                outputs: [{
                                    internalType: "address payable",
                                    name: "",
                                    type: "address",
                                }, ],
                                stateMutability: "view",
                                type: "function",
                            },
                            {
                                inputs: [],
                                name: "devWallet",
                                outputs: [{
                                    internalType: "address payable",
                                    name: "",
                                    type: "address",
                                }, ],
                                stateMutability: "view",
                                type: "function",
                            },
                            {
                                inputs: [],
                                name: "getContractBalance",
                                outputs: [
                                    { internalType: "uint256", name: "", type: "uint256" },
                                ],
                                stateMutability: "view",
                                type: "function",
                            },
                            {
                                inputs: [
                                    { internalType: "uint8", name: "plan", type: "uint8" },
                                ],
                                name: "getPlanInfo",
                                outputs: [
                                    { internalType: "uint256", name: "time", type: "uint256" },
                                    { internalType: "uint256", name: "percent", type: "uint256" },
                                ],
                                stateMutability: "view",
                                type: "function",
                            },
                            {
                                inputs: [],
                                name: "getSiteInfo",
                                outputs: [{
                                        internalType: "uint256",
                                        name: "_totalInvested",
                                        type: "uint256",
                                    },
                                    {
                                        internalType: "uint256",
                                        name: "_totalBonus",
                                        type: "uint256",
                                    },
                                    {
                                        internalType: "uint256",
                                        name: "ensBalance",
                                        type: "uint256",
                                    },
                                    {
                                        internalType: "uint256",
                                        name: "ensTriggerBalance",
                                        type: "uint256",
                                    },
                                ],
                                stateMutability: "view",
                                type: "function",
                            },
                            {
                                inputs: [{
                                    internalType: "address",
                                    name: "userAddress",
                                    type: "address",
                                }, ],
                                name: "getUserAmountOfDeposits",
                                outputs: [
                                    { internalType: "uint256", name: "", type: "uint256" },
                                ],
                                stateMutability: "view",
                                type: "function",
                            },
                            {
                                inputs: [{
                                    internalType: "address",
                                    name: "userAddress",
                                    type: "address",
                                }, ],
                                name: "getUserAvailable",
                                outputs: [
                                    { internalType: "uint256", name: "", type: "uint256" },
                                ],
                                stateMutability: "view",
                                type: "function",
                            },
                            {
                                inputs: [{
                                    internalType: "address",
                                    name: "userAddress",
                                    type: "address",
                                }, ],
                                name: "getUserCheckpoint",
                                outputs: [
                                    { internalType: "uint256", name: "", type: "uint256" },
                                ],
                                stateMutability: "view",
                                type: "function",
                            },
                            {
                                inputs: [{
                                        internalType: "address",
                                        name: "userAddress",
                                        type: "address",
                                    },
                                    { internalType: "uint256", name: "index", type: "uint256" },
                                ],
                                name: "getUserDepositInfo",
                                outputs: [
                                    { internalType: "uint8", name: "plan", type: "uint8" },
                                    { internalType: "uint256", name: "percent", type: "uint256" },
                                    { internalType: "uint256", name: "amount", type: "uint256" },
                                    { internalType: "uint256", name: "start", type: "uint256" },
                                    { internalType: "uint256", name: "finish", type: "uint256" },
                                ],
                                stateMutability: "view",
                                type: "function",
                            },
                            {
                                inputs: [{
                                    internalType: "address",
                                    name: "userAddress",
                                    type: "address",
                                }, ],
                                name: "getUserDividends",
                                outputs: [
                                    { internalType: "uint256", name: "", type: "uint256" },
                                ],
                                stateMutability: "view",
                                type: "function",
                            },
                            {
                                inputs: [{
                                    internalType: "address",
                                    name: "userAddress",
                                    type: "address",
                                }, ],
                                name: "getUserDownlineCount",
                                outputs: [{
                                    internalType: "uint256[1]",
                                    name: "referrals",
                                    type: "uint256[1]",
                                }, ],
                                stateMutability: "view",
                                type: "function",
                            },
                            {
                                inputs: [{
                                    internalType: "address",
                                    name: "userAddress",
                                    type: "address",
                                }, ],
                                name: "getUserHoldBonus",
                                outputs: [
                                    { internalType: "uint256", name: "", type: "uint256" },
                                ],
                                stateMutability: "view",
                                type: "function",
                            },
                            {
                                inputs: [{
                                    internalType: "address",
                                    name: "userAddress",
                                    type: "address",
                                }, ],
                                name: "getUserInfo",
                                outputs: [{
                                        internalType: "uint256",
                                        name: "checkpoint",
                                        type: "uint256",
                                    },
                                    {
                                        internalType: "uint256",
                                        name: "totalDeposit",
                                        type: "uint256",
                                    },
                                    {
                                        internalType: "uint256",
                                        name: "totalWithdrawn",
                                        type: "uint256",
                                    },
                                    {
                                        internalType: "uint256",
                                        name: "totalReferrals",
                                        type: "uint256",
                                    },
                                    { internalType: "uint256", name: "bonus", type: "uint256" },
                                ],
                                stateMutability: "view",
                                type: "function",
                            },
                            {
                                inputs: [{
                                    internalType: "address",
                                    name: "userAddress",
                                    type: "address",
                                }, ],
                                name: "getUserReferralBonus",
                                outputs: [
                                    { internalType: "uint256", name: "", type: "uint256" },
                                ],
                                stateMutability: "view",
                                type: "function",
                            },
                            {
                                inputs: [{
                                    internalType: "address",
                                    name: "userAddress",
                                    type: "address",
                                }, ],
                                name: "getUserReferralTotalBonus",
                                outputs: [
                                    { internalType: "uint256", name: "", type: "uint256" },
                                ],
                                stateMutability: "view",
                                type: "function",
                            },
                            {
                                inputs: [{
                                    internalType: "address",
                                    name: "userAddress",
                                    type: "address",
                                }, ],
                                name: "getUserReferralWithdrawn",
                                outputs: [
                                    { internalType: "uint256", name: "", type: "uint256" },
                                ],
                                stateMutability: "view",
                                type: "function",
                            },
                            {
                                inputs: [{
                                    internalType: "address",
                                    name: "userAddress",
                                    type: "address",
                                }, ],
                                name: "getUserReferrer",
                                outputs: [
                                    { internalType: "address", name: "", type: "address" },
                                ],
                                stateMutability: "view",
                                type: "function",
                            },
                            {
                                inputs: [{
                                    internalType: "address",
                                    name: "userAddress",
                                    type: "address",
                                }, ],
                                name: "getUserTotalDeposits",
                                outputs: [
                                    { internalType: "uint256", name: "amount", type: "uint256" },
                                ],
                                stateMutability: "view",
                                type: "function",
                            },
                            {
                                inputs: [{
                                    internalType: "address",
                                    name: "userAddress",
                                    type: "address",
                                }, ],
                                name: "getUserTotalReferrals",
                                outputs: [
                                    { internalType: "uint256", name: "", type: "uint256" },
                                ],
                                stateMutability: "view",
                                type: "function",
                            },
                            {
                                inputs: [{
                                    internalType: "address",
                                    name: "userAddress",
                                    type: "address",
                                }, ],
                                name: "getUserTotalWithdrawn",
                                outputs: [
                                    { internalType: "uint256", name: "", type: "uint256" },
                                ],
                                stateMutability: "view",
                                type: "function",
                            },
                            {
                                inputs: [{
                                        internalType: "address",
                                        name: "referrer",
                                        type: "address",
                                    },
                                    { internalType: "uint8", name: "plan", type: "uint8" },
                                    {
                                        internalType: "uint256",
                                        name: "depositAmount",
                                        type: "uint256",
                                    },
                                ],
                                name: "invest",
                                outputs: [],
                                stateMutability: "payable",
                                type: "function",
                            },
                            {
                                inputs: [],
                                name: "startDate",
                                outputs: [
                                    { internalType: "uint256", name: "", type: "uint256" },
                                ],
                                stateMutability: "view",
                                type: "function",
                            },
                            {
                                inputs: [],
                                name: "token",
                                outputs: [{
                                    internalType: "contract IERC20",
                                    name: "",
                                    type: "address",
                                }, ],
                                stateMutability: "view",
                                type: "function",
                            },
                            {
                                inputs: [],
                                name: "totalInvested",
                                outputs: [
                                    { internalType: "uint256", name: "", type: "uint256" },
                                ],
                                stateMutability: "view",
                                type: "function",
                            },
                            {
                                inputs: [],
                                name: "totalReferral",
                                outputs: [
                                    { internalType: "uint256", name: "", type: "uint256" },
                                ],
                                stateMutability: "view",
                                type: "function",
                            },
                            {
                                inputs: [],
                                name: "withdraw",
                                outputs: [],
                                stateMutability: "nonpayable",
                                type: "function",
                            },
                        ],
                        title: "busd",
                        zeroCount: 2,
                        tokenId: "binance-usd",
                        unit: "DUSD",
                        min: "10",
                        max: "5000000",
                        backStyle: "busd-back",
                        colorStyle: "busd-color",
                        secondStyle: "busd-primary",
                        borderStyle: "busd-border",
                        tokenAbi: v,
                        tokenContract: "0x5EbA288F8833071bA7Cd5C2B356754811c0CE8Fb",
                        imageUrl: "/assets/img/busd.png",
                    },
                },
                T = function(e) {
                    var t = new Date(1e3 * e).toLocaleTimeString([], {
                            hourCycle: "h23",
                        }),
                        n = new Date(1e3 * e).toLocaleDateString().split("/");
                    return [
                        [n[2], ("0" + n[0]).slice(-2), ("0" + n[1]).slice(-2)].join("/"),
                        t,
                    ];
                },
                k = function(e) {
                    var t = 6e4,
                        n = 36e5,
                        a = 864e5,
                        s = 2592e6,
                        i = 31536e6,
                        r = new Date() - 1e3 * e;
                    return r < t ?
                        Math.round(r / 1e3) + " seconds ago" :
                        r < n ?
                        Math.round(r / t) + " minutes ago" :
                        r < a ?
                        Math.round(r / n) + " hours ago" :
                        r < s ?
                        "approximately " + Math.round(r / a) + " days ago" :
                        r < i ?
                        "approximately " + Math.round(r / s) + " months ago" :
                        "approximately " + Math.round(r / i) + " years ago";
                },
                A = function(e) {
                    if ("string" === typeof e)
                        return (
                            e.substring(0, 5) + "..." + e.substring(e.length - 5, e.length)
                        );
                },
                C = function(e, t) {
                    t && (e = Number(e).toFixed(t));
                    var n = e.toString().split(".");
                    return (
                        (n[0] = n[0].replace(/(\d)(?=(\d{3})+$)/g, "$1,")), n.join(".")
                    );
                },
                S = n(21),
                I = n(0),
                M = function(e) {
                    var t = e.receipt,
                        n = e.type;
                    return Object(I.jsxs)(I.Fragment, {
                        children: [
                            Object(I.jsx)("p", {
                                className: "rec big",
                                children: Object(I.jsx)("span", {
                                    className: "key",
                                    children: "Your Receipt",
                                }),
                            }),
                            Object(I.jsxs)("p", {
                                className: "rec small",
                                children: [
                                    Object(I.jsx)("span", {
                                        className: "key",
                                        children: "TransactionHash: ",
                                    }),
                                    " ",
                                    Object(I.jsx)("a", {
                                        href: "https://bscscan.com/tx/".concat(t.blockHash),
                                        target: "_blank",
                                        children: Object(I.jsxs)("b", {
                                            className: "value",
                                            children: [" ", A(t.blockHash)],
                                        }),
                                    }),
                                ],
                            }),
                            Object(I.jsxs)("p", {
                                className: "rec small",
                                children: [
                                    Object(I.jsx)("span", {
                                        className: "key",
                                        children: "Status:",
                                    }),
                                    " ",
                                    Object(I.jsx)("b", {
                                        className: "value",
                                        children: t.status && "Success",
                                    }),
                                ],
                            }),
                            Object(I.jsxs)("p", {
                                className: "rec small",
                                children: [
                                    Object(I.jsx)("span", {
                                        className: "key",
                                        children: "BlockNumber:",
                                    }),
                                    " ",
                                    Object(I.jsx)("b", {
                                        className: "value",
                                        children: t.blockNumber,
                                    }),
                                ],
                            }),
                            Object(I.jsxs)("p", {
                                className: "rec small receipt-end-text",
                                children: [
                                    Object(I.jsx)("span", {
                                        className: "key",
                                        children: "Time:",
                                    }),
                                    Object(I.jsx)("b", {
                                        className: "value",
                                        children: k(
                                            "invest" === n ?
                                            t.events.NewDeposit.returnValues.time :
                                            t.events.Withdrawn.returnValues.time
                                        ),
                                    }),
                                ],
                            }),
                            Object(I.jsx)("a", {
                                className: "receipt-btn",
                                href: "https://bscscan.com/tx/".concat(t.transactionHash),
                                target: "_blank",
                                children: "Show More",
                            }),
                        ],
                    });
                },
                D = Object(a.createContext)({
                    notification: null,
                    showModal: function() {},
                    hideModal: function() {},
                }),
                B = { bnb: "0000.000", busd: "0000.000" },
                U = function(e) {
                    var t,
                        n,
                        s = Object(a.useState)("0.00"),
                        i = Object(r.a)(s, 2),
                        d = i[0],
                        b = (i[1], Object(a.useState)("0.00")),
                        f = Object(r.a)(b, 2),
                        j = f[0],
                        x = f[1],
                        g = Object(a.useState)("0.00"),
                        k = Object(r.a)(g, 2),
                        U = k[0],
                        W = (k[1], Object(a.useState)("0")),
                        E = Object(r.a)(W, 2),
                        R = E[0],
                        _ = E[1],
                        P = Object(a.useState)(),
                        F = Object(r.a)(P, 2),
                        L = F[0],
                        H = F[1],
                        Y = Object(a.useState)(),
                        z = Object(r.a)(Y, 2),
                        V = z[0],
                        X = z[1],
                        G = Object(a.useState)(),
                        K = Object(r.a)(G, 2),
                        Q = (K[0], K[1]),
                        J = Object(a.useState)(),
                        q = Object(r.a)(J, 2),
                        $ = q[0],
                        Z = q[1],
                        ee = Object(a.useState)(),
                        te = Object(r.a)(ee, 2),
                        ne = te[0],
                        ae = te[1],
                        se = Object(a.useState)(0),
                        ie = Object(r.a)(se, 2),
                        re = ie[0],
                        ce = ie[1],
                        oe = Object(a.useState)(B),
                        ue = Object(r.a)(oe, 2),
                        le = ue[0],
                        de = ue[1],
                        pe = Object(a.useState)(B),
                        be = Object(r.a)(pe, 2),
                        me = be[0],
                        fe = be[1],
                        ye = Object(a.useState)(B),
                        je = Object(r.a)(ye, 2),
                        he = je[0],
                        xe = je[1],
                        Oe = Object(a.useState)(B),
                        ve = Object(r.a)(Oe, 2),
                        ge = ve[0],
                        we = ve[1],
                        Ne = Object(a.useState)(B),
                        Te = Object(r.a)(Ne, 2),
                        ke = Te[0],
                        Ae = Te[1],
                        Ce = Object(a.useState)([]),
                        Se = Object(r.a)(Ce, 2),
                        Ie = Se[0],
                        Me = Se[1],
                        De = Object(a.useState)(["0.000", "0.000"]),
                        Be = Object(r.a)(De, 2),
                        Ue = Be[0],
                        We = Be[1],
                        Ee = Object(a.useState)([]),
                        Re = Object(r.a)(Ee, 2),
                        _e = Re[0],
                        Pe = Re[1],
                        Fe = Object(a.useState)(["0", "0"]),
                        Le = Object(r.a)(Fe, 2),
                        He = Le[0],
                        Ye = Le[1],
                        ze = Object(a.useState)(),
                        Ve = Object(r.a)(ze, 2),
                        Xe = Ve[0],
                        Ge = Ve[1],
                        Ke = Object(a.useState)(),
                        Qe = Object(r.a)(Ke, 2),
                        Je = Qe[0],
                        qe = Qe[1],
                        $e = Object(a.useState)(),
                        Ze = Object(r.a)($e, 2),
                        et = Ze[0],
                        tt = Ze[1],
                        nt = Object(a.useState)(0),
                        at = Object(r.a)(nt, 2),
                        st = at[0],
                        it = at[1],
                        rt = Object(a.useState)(!0),
                        ct = Object(r.a)(rt, 2),
                        ot = ct[0],
                        ut = ct[1],
                        lt = Object(a.useState)("Enable to Stake"),
                        dt = Object(r.a)(lt, 2),
                        pt = dt[0],
                        bt = dt[1],
                        mt = Object(a.useState)(),
                        ft = Object(r.a)(mt, 2),
                        yt = (ft[0], ft[1]),
                        jt = Object(a.useState)(!1),
                        ht = Object(r.a)(jt, 2),
                        xt = ht[0],
                        Ot = ht[1],
                        vt = Object(a.useState)(!1),
                        gt = Object(r.a)(vt, 2),
                        wt = gt[0],
                        Nt = (gt[1], Object(a.useState)(!1)),
                        Tt = Object(r.a)(Nt, 2),
                        kt = Tt[0],
                        At = Tt[1],
                        Ct = Object(a.useState)(),
                        St = Object(r.a)(Ct, 2),
                        It = St[0],
                        Mt = St[1],
                        Dt = Object(a.useState)(!1),
                        Bt = Object(r.a)(Dt, 2),
                        Ut = Bt[0],
                        Wt = Bt[1],
                        Et = Object(a.useState)({ bnb: "0000.000", busd: "0000.000" }),
                        Rt = Object(r.a)(Et, 2),
                        _t = Rt[0],
                        Pt = (Rt[1], Object(a.useState)("0.00")),
                        Ft = Object(r.a)(Pt, 2),
                        Lt = Ft[0],
                        Ht = (Ft[1], Object(a.useState)("0.00")),
                        Yt = Object(r.a)(Ht, 2),
                        zt = Yt[0],
                        Vt = (Yt[1], Object(a.useState)("0.00")),
                        Xt = Object(r.a)(Vt, 2),
                        Gt = Xt[0],
                        Kt = (Xt[1], Object(a.useState)(!1)),
                        Qt = Object(r.a)(Kt, 2),
                        Jt = Qt[0],
                        qt = Qt[1],
                        $t = Object(a.useState)("0.0000"),
                        Zt = Object(r.a)($t, 2),
                        en = Zt[0],
                        tn = Zt[1],
                        nn = Object(a.useState)("0.0000"),
                        an = Object(r.a)(nn, 2),
                        sn = an[0],
                        rn = an[1],
                        cn = Object(a.useState)("0.0000"),
                        on = Object(r.a)(cn, 2),
                        un = on[0],
                        ln = on[1],
                        dn = Object(a.useState)(""),
                        pn = Object(r.a)(dn, 2),
                        bn = pn[0],
                        mn = (pn[1], Object(a.useState)(!1)),
                        fn = Object(r.a)(mn, 2),
                        yn = fn[0],
                        jn = fn[1],
                        hn = Object(a.useState)(
                            localStorage.getItem("activeNetwork") ?
                            N[localStorage.getItem("activeNetwork")] :
                            N.bnb
                        ),
                        xn = Object(r.a)(hn, 2),
                        On = xn[0],
                        vn = xn[1],
                        gn = [{
                            chainId: "0x38",
                            chainName: "BSCMAINET",
                            rpcUrls: ["https://bsc-dataseed1.binance.org"],
                            nativeCurrency: {
                                name: "BINANCE COIN",
                                symbol: "BNB",
                                decimals: 18,
                            },
                            blockExplorerUrls: ["https://bscscan.com/"],
                        }, ];
                    Object(a.useEffect)(function() {
                            localStorage.getItem("activeNetwork") ?
                                (vn(N[localStorage.getItem("activeNetwork")]),
                                    Sn(localStorage.getItem("activeNetwork"))) :
                                Sn(On.title),
                                localStorage.getItem("account") &&
                                "undefined" !== localStorage.getItem("account") ?
                                An("wallet") :
                                An("noWallet");
                        }, []),
                        Object(a.useEffect)(function() {
                            L &&
                                ne &&
                                !0 === V.currentProvider.isMetaMask &&
                                ot &&
                                (ut(!1),
                                    L.on("accountsChanged", function(e) {
                                        Mt("0"), Nn($, V, e[0]);
                                    })),
                                L &&
                                ne &&
                                !0 === V.currentProvider.isMetaMask &&
                                ot &&
                                (ut(!1),
                                    L.on("networkChanged", function(e) {
                                        Number(e) != Number("56") ? jn(!0) : yn ? jn(!1) : An();
                                    }));
                        });
                    var wn = (function() {
                            var e = Object(l.a)(
                                p.a.mark(function e(t) {
                                    var n, a, s, i, r;
                                    return p.a.wrap(function(e) {
                                        for (;;)
                                            switch ((e.prev = e.next)) {
                                                case 0:
                                                    return (e.next = 2), _n();
                                                case 2:
                                                    if (e.sent) {
                                                        e.next = 5;
                                                        break;
                                                    }
                                                    return e.abrupt(
                                                        "return",
                                                        S.b.error("Wrong network", {
                                                            position: "bottom-right",
                                                        })
                                                    );
                                                case 5:
                                                    return (
                                                        tn(0),
                                                        rn(0),
                                                        x(0),
                                                        ln(0),
                                                        _(0),
                                                        Pe([]),
                                                        Me([]),
                                                        Sn(N[t].title),
                                                        vn(N[t]),
                                                        We(["0.000", "0.000"]),
                                                        we(B),
                                                        de(B),
                                                        fe(B),
                                                        (n = new m.a("https://bsc-dataseed1.binance.org/")),
                                                        ce("0.00"),
                                                        Mt("0"),
                                                        Pe([]),
                                                        clearInterval(et),
                                                        localStorage.setItem("activeNetwork", t),
                                                        (e.next = 26),
                                                        w.a.get(
                                                            "https://api.coingecko.com/api/v3/simple/price?ids=".concat(
                                                                N[t].tokenId,
                                                                "&vs_currencies=usd"
                                                            )
                                                        )
                                                    );
                                                case 26:
                                                    return (
                                                        (a = e.sent),
                                                        ce(a.data[N[t].tokenId].usd),
                                                        (s = new n.eth.Contract(N[t].ABI, N[t].contract)),
                                                        (e.next = 31),
                                                        s.methods
                                                        .getSiteInfo()
                                                        .call(function(e, a) {
                                                            e ||
                                                                (de(function(e) {
                                                                        return Object(u.a)(
                                                                            Object(u.a)({}, e), {},
                                                                            Object(o.a)({},
                                                                                N[t].title,
                                                                                n.utils.fromWei(a[0])
                                                                            )
                                                                        );
                                                                    }),
                                                                    fe(function(e) {
                                                                        return Object(u.a)(
                                                                            Object(u.a)({}, e), {},
                                                                            Object(o.a)({},
                                                                                N[t].title,
                                                                                n.utils.fromWei(a[1])
                                                                            )
                                                                        );
                                                                    }),
                                                                    Ae(function(e) {
                                                                        return Object(u.a)(
                                                                            Object(u.a)({}, e), {},
                                                                            Object(o.a)({},
                                                                                N[t].title,
                                                                                n.utils.fromWei(a[2])
                                                                            )
                                                                        );
                                                                    }));
                                                        })
                                                        .catch(function(e) {
                                                            console.log(e);
                                                        })
                                                    );
                                                case 31:
                                                    if ((kn(t), !ne)) {
                                                        e.next = 67;
                                                        break;
                                                    }
                                                    if ("busd" !== N[t].title) {
                                                        e.next = 39;
                                                        break;
                                                    }
                                                    return (
                                                        (i = new n.eth.Contract(
                                                            v,
                                                            "0x5EbA288F8833071bA7Cd5C2B356754811c0CE8Fb"
                                                        )),
                                                        (e.next = 37),
                                                        i.methods
                                                        .balanceOf(ne)
                                                        .call(function(e, t) {
                                                            e ||
                                                                xe(function(e) {
                                                                    return Object(u.a)(
                                                                        Object(u.a)({}, e), {},
                                                                        Object(o.a)({},
                                                                            "busd",
                                                                            n.utils.fromWei(t)
                                                                        )
                                                                    );
                                                                });
                                                        })
                                                        .catch(function(e) {
                                                            console.log(e);
                                                        })
                                                    );
                                                case 37:
                                                    e.next = 43;
                                                    break;
                                                case 39:
                                                    return (e.next = 41), n.eth.getBalance(ne);
                                                case 41:
                                                    (r = e.sent),
                                                    xe(function(e) {
                                                        return Object(u.a)(
                                                            Object(u.a)({}, e), {},
                                                            Object(o.a)({}, "bnb", n.utils.fromWei(r))
                                                        );
                                                    });
                                                case 43:
                                                    return (
                                                        (e.next = 45),
                                                        s.methods.getUserInfo(ne).call(function(e, t) {
                                                            e ||
                                                                (tn(n.utils.fromWei(t[1])),
                                                                    rn(n.utils.fromWei(t[2])),
                                                                    ln(n.utils.fromWei(t[4])));
                                                        })
                                                    );
                                                case 45:
                                                    return (
                                                        (e.next = 47),
                                                        s.methods
                                                        .getUserReferralTotalBonus(ne)
                                                        .call(function(e, t) {
                                                            e || x(n.utils.fromWei(t));
                                                        })
                                                    );
                                                case 47:
                                                    return (
                                                        (e.next = 49),
                                                        s.methods
                                                        .getUserDownlineCount(ne)
                                                        .call(function(e, t) {
                                                            if (!e) {
                                                                var n = Number(t[0]);
                                                                _(n);
                                                            }
                                                        })
                                                    );
                                                case 49:
                                                    return (
                                                        (e.next = 51),
                                                        s.methods
                                                        .getUserReferralTotalBonus(ne)
                                                        .call(function(e, t) {
                                                            e || x(n.utils.fromWei(t));
                                                        })
                                                    );
                                                case 51:
                                                    return (
                                                        (e.next = 53),
                                                        s.methods
                                                        .getUserDownlineCount(ne)
                                                        .call(function(e, t) {
                                                            if (!e) {
                                                                var n = Number(t[0]);
                                                                _(n);
                                                            }
                                                        })
                                                    );
                                                case 53:
                                                    return (
                                                        (e.next = 55),
                                                        s.methods.getUserInfo(ne).call(function(e, t) {
                                                            e ||
                                                                (tn(n.utils.fromWei(t[1])),
                                                                    rn(n.utils.fromWei(t[2])),
                                                                    ln(n.utils.fromWei(t[4])));
                                                        })
                                                    );
                                                case 55:
                                                    return (
                                                        (e.next = 57),
                                                        s.methods
                                                        .getUserAvailable(ne)
                                                        .call(function(e, a) {
                                                            e ||
                                                                we(function(e) {
                                                                    return Object(u.a)(
                                                                        Object(u.a)({}, e), {},
                                                                        Object(o.a)({},
                                                                            N[t].title,
                                                                            n.utils.fromWei(a)
                                                                        )
                                                                    );
                                                                });
                                                        })
                                                        .catch(function(e) {
                                                            console.log(e);
                                                        })
                                                    );
                                                case 57:
                                                    return (
                                                        (e.next = 59),
                                                        s.methods
                                                        .getUserTotalReferrals(ne)
                                                        .call(
                                                            (function() {
                                                                var e = Object(l.a)(
                                                                    p.a.mark(function e(t, a) {
                                                                        return p.a.wrap(function(e) {
                                                                            for (;;)
                                                                                switch ((e.prev = e.next)) {
                                                                                    case 0:
                                                                                        if (t) {
                                                                                            e.next = 3;
                                                                                            break;
                                                                                        }
                                                                                        return (
                                                                                            (e.next = 3),
                                                                                            s.methods
                                                                                            .getUserReferralTotalBonus(ne)
                                                                                            .call(function(e, t) {
                                                                                                e ||
                                                                                                    Ye([
                                                                                                        a,
                                                                                                        n.utils.fromWei(t),
                                                                                                    ]);
                                                                                            })
                                                                                        );
                                                                                    case 3:
                                                                                    case "end":
                                                                                        return e.stop();
                                                                                }
                                                                        }, e);
                                                                    })
                                                                );
                                                                return function(t, n) {
                                                                    return e.apply(this, arguments);
                                                                };
                                                            })()
                                                        )
                                                        .catch(function(e) {
                                                            console.log(e);
                                                        })
                                                    );
                                                case 59:
                                                    return (
                                                        (e.next = 61),
                                                        s.methods
                                                        .TIME_STEP()
                                                        .call(
                                                            (function() {
                                                                var e = Object(l.a)(
                                                                    p.a.mark(function e(t, n) {
                                                                        return p.a.wrap(function(e) {
                                                                            for (;;)
                                                                                switch ((e.prev = e.next)) {
                                                                                    case 0:
                                                                                        if (t) {
                                                                                            e.next = 3;
                                                                                            break;
                                                                                        }
                                                                                        return (
                                                                                            (e.next = 3),
                                                                                            s.methods
                                                                                            .getUserCheckpoint(ne)
                                                                                            .call(function(e, t) {
                                                                                                e || Mt(1e3 * t + 1e3 * n);
                                                                                            })
                                                                                        );
                                                                                    case 3:
                                                                                    case "end":
                                                                                        return e.stop();
                                                                                }
                                                                        }, e);
                                                                    })
                                                                );
                                                                return function(t, n) {
                                                                    return e.apply(this, arguments);
                                                                };
                                                            })()
                                                        )
                                                        .catch(function(e) {
                                                            console.log(e);
                                                        })
                                                    );
                                                case 61:
                                                    return (
                                                        (e.next = 63),
                                                        s.methods
                                                        .getUserAmountOfDeposits(ne)
                                                        .call(function(e, t) {
                                                            e || Ge(n.utils.fromWei(t));
                                                        })
                                                        .catch(function(e) {
                                                            console.log(e);
                                                        })
                                                    );
                                                case 63:
                                                    ae(ne), Un(s, ne, n), Rn(n, ne, t), Tn(s, n, t);
                                                case 67:
                                                case "end":
                                                    return e.stop();
                                            }
                                    }, e);
                                })
                            );
                            return function(t) {
                                return e.apply(this, arguments);
                            };
                        })(),
                        Nn = (function() {
                            var e = Object(l.a)(
                                p.a.mark(function e(t, n, a) {
                                    var s, i, r;
                                    return p.a.wrap(function(e) {
                                        for (;;)
                                            switch ((e.prev = e.next)) {
                                                case 0:
                                                    if (
                                                        (localStorage.getItem("activeNetwork") ?
                                                            ((s = N[localStorage.getItem("activeNetwork")]),
                                                                Sn(localStorage.getItem("activeNetwork"))) :
                                                            (s = On), !a)
                                                    ) {
                                                        e.next = 31;
                                                        break;
                                                    }
                                                    return (
                                                        (e.next = 4),
                                                        t.methods
                                                        .getUserReferralTotalBonus(a)
                                                        .call(function(e, t) {
                                                            e || x(n.utils.fromWei(t));
                                                        })
                                                    );
                                                case 4:
                                                    return (
                                                        (e.next = 6),
                                                        t.methods
                                                        .getUserDownlineCount(a)
                                                        .call(function(e, t) {
                                                            if (!e) {
                                                                var n = Number(t[0]);
                                                                _(n);
                                                            }
                                                        })
                                                    );
                                                case 6:
                                                    return (
                                                        (e.next = 8),
                                                        t.methods.getUserInfo(a).call(function(e, t) {
                                                            e ||
                                                                (tn(n.utils.fromWei(t[1])),
                                                                    rn(n.utils.fromWei(t[2])),
                                                                    ln(n.utils.fromWei(t[4])));
                                                        })
                                                    );
                                                case 8:
                                                    return (
                                                        (e.next = 10),
                                                        t.methods
                                                        .getUserAvailable(a)
                                                        .call(function(e, t) {
                                                            e ||
                                                                we(function(e) {
                                                                    return Object(u.a)(
                                                                        Object(u.a)({}, e), {},
                                                                        Object(o.a)({},
                                                                            s.title,
                                                                            n.utils.fromWei(t)
                                                                        )
                                                                    );
                                                                });
                                                        })
                                                        .catch(function(e) {
                                                            console.log(e);
                                                        })
                                                    );
                                                case 10:
                                                    if ("busd" !== s.title) {
                                                        e.next = 16;
                                                        break;
                                                    }
                                                    return (
                                                        (i = new n.eth.Contract(
                                                            v,
                                                            "0x5EbA288F8833071bA7Cd5C2B356754811c0CE8Fb"
                                                        )),
                                                        (e.next = 14),
                                                        i.methods
                                                        .balanceOf(a)
                                                        .call(function(e, t) {
                                                            e ||
                                                                xe(function(e) {
                                                                    return Object(u.a)(
                                                                        Object(u.a)({}, e), {},
                                                                        Object(o.a)({},
                                                                            "busd",
                                                                            n.utils.fromWei(t)
                                                                        )
                                                                    );
                                                                });
                                                        })
                                                        .catch(function(e) {
                                                            console.log(e);
                                                        })
                                                    );
                                                case 14:
                                                    e.next = 20;
                                                    break;
                                                case 16:
                                                    return (e.next = 18), n.eth.getBalance(a);
                                                case 18:
                                                    (r = e.sent),
                                                    xe(function(e) {
                                                        return Object(u.a)(
                                                            Object(u.a)({}, e), {},
                                                            Object(o.a)({}, "bnb", n.utils.fromWei(r))
                                                        );
                                                    });
                                                case 20:
                                                    return (
                                                        (e.next = 22),
                                                        t.methods.getUserTotalReferrals(a).call(
                                                            (function() {
                                                                var e = Object(l.a)(
                                                                    p.a.mark(function e(s, i) {
                                                                        return p.a.wrap(function(e) {
                                                                            for (;;)
                                                                                switch ((e.prev = e.next)) {
                                                                                    case 0:
                                                                                        if (s) {
                                                                                            e.next = 3;
                                                                                            break;
                                                                                        }
                                                                                        return (
                                                                                            (e.next = 3),
                                                                                            t.methods
                                                                                            .getUserReferralTotalBonus(a)
                                                                                            .call(function(e, t) {
                                                                                                e ||
                                                                                                    Ye([i, n.utils.fromWei(t)]);
                                                                                            })
                                                                                        );
                                                                                    case 3:
                                                                                    case "end":
                                                                                        return e.stop();
                                                                                }
                                                                        }, e);
                                                                    })
                                                                );
                                                                return function(t, n) {
                                                                    return e.apply(this, arguments);
                                                                };
                                                            })()
                                                        )
                                                    );
                                                case 22:
                                                    return (
                                                        (e.next = 24),
                                                        t.methods
                                                        .getUserAmountOfDeposits(a)
                                                        .call(function(e, t) {
                                                            e || Ge(n.utils.fromWei(t));
                                                        })
                                                    );
                                                case 24:
                                                    return (
                                                        (e.next = 26),
                                                        t.methods.TIME_STEP().call(
                                                            (function() {
                                                                var e = Object(l.a)(
                                                                    p.a.mark(function e(n, s) {
                                                                        return p.a.wrap(function(e) {
                                                                            for (;;)
                                                                                switch ((e.prev = e.next)) {
                                                                                    case 0:
                                                                                        if (n) {
                                                                                            e.next = 3;
                                                                                            break;
                                                                                        }
                                                                                        return (
                                                                                            (e.next = 3),
                                                                                            t.methods
                                                                                            .getUserCheckpoint(a)
                                                                                            .call(function(e, t) {
                                                                                                e || Mt(1e3 * t + 1e3 * s);
                                                                                            })
                                                                                        );
                                                                                    case 3:
                                                                                    case "end":
                                                                                        return e.stop();
                                                                                }
                                                                        }, e);
                                                                    })
                                                                );
                                                                return function(t, n) {
                                                                    return e.apply(this, arguments);
                                                                };
                                                            })()
                                                        )
                                                    );
                                                case 26:
                                                    ae(a), Un(t, a, n), Rn(n, a, s.title), (e.next = 33);
                                                    break;
                                                case 31:
                                                    localStorage.removeItem("account"), ae("");
                                                case 33:
                                                case "end":
                                                    return e.stop();
                                            }
                                    }, e);
                                })
                            );
                            return function(t, n, a) {
                                return e.apply(this, arguments);
                            };
                        })(),
                        Tn = (function() {
                            var e = Object(l.a)(
                                p.a.mark(function e(n, a, s) {
                                    return p.a.wrap(function(e) {
                                        for (;;)
                                            switch ((e.prev = e.next)) {
                                                case 0:
                                                    (t = setInterval(
                                                        Object(l.a)(
                                                            p.a.mark(function e() {
                                                                var t, s, i;
                                                                return p.a.wrap(function(e) {
                                                                    for (;;)
                                                                        switch ((e.prev = e.next)) {
                                                                            case 0:
                                                                                if ((V || a, !V)) {
                                                                                    e.next = 7;
                                                                                    break;
                                                                                }
                                                                                return (
                                                                                    (e.next = 4), V.eth.getAccounts()
                                                                                );
                                                                            case 4:
                                                                                (t = e.sent), (e.next = 10);
                                                                                break;
                                                                            case 7:
                                                                                return (
                                                                                    (e.next = 9), a.eth.getAccounts()
                                                                                );
                                                                            case 9:
                                                                                t = e.sent;
                                                                            case 10:
                                                                                return (
                                                                                    (s = new a.eth.Contract(
                                                                                        N.bnb.ABI,
                                                                                        N.bnb.contract
                                                                                    )),
                                                                                    (i = new a.eth.Contract(
                                                                                        N.busd.ABI,
                                                                                        N.busd.contract
                                                                                    )),
                                                                                    (e.next = 14),
                                                                                    s.methods
                                                                                    .getSiteInfo()
                                                                                    .call(function(e, t) {
                                                                                        e ||
                                                                                            (de(function(e) {
                                                                                                    return Object(u.a)(
                                                                                                        Object(u.a)({}, e), {},
                                                                                                        Object(o.a)({},
                                                                                                            "bnb",
                                                                                                            a.utils.fromWei(t[0])
                                                                                                        )
                                                                                                    );
                                                                                                }),
                                                                                                fe(function(e) {
                                                                                                    return Object(u.a)(
                                                                                                        Object(u.a)({}, e), {},
                                                                                                        Object(o.a)({},
                                                                                                            "bnb",
                                                                                                            a.utils.fromWei(t[1])
                                                                                                        )
                                                                                                    );
                                                                                                }),
                                                                                                Ae(function(e) {
                                                                                                    return Object(u.a)(
                                                                                                        Object(u.a)({}, e), {},
                                                                                                        Object(o.a)({},
                                                                                                            "bnb",
                                                                                                            a.utils.fromWei(t[2])
                                                                                                        )
                                                                                                    );
                                                                                                }));
                                                                                    })
                                                                                );
                                                                            case 14:
                                                                                return (
                                                                                    (e.next = 16),
                                                                                    i.methods
                                                                                    .getSiteInfo()
                                                                                    .call(function(e, t) {
                                                                                        e ||
                                                                                            (de(function(e) {
                                                                                                    return Object(u.a)(
                                                                                                        Object(u.a)({}, e), {},
                                                                                                        Object(o.a)({},
                                                                                                            "busd",
                                                                                                            a.utils.fromWei(t[0])
                                                                                                        )
                                                                                                    );
                                                                                                }),
                                                                                                fe(function(e) {
                                                                                                    return Object(u.a)(
                                                                                                        Object(u.a)({}, e), {},
                                                                                                        Object(o.a)({},
                                                                                                            "busd",
                                                                                                            a.utils.fromWei(t[1])
                                                                                                        )
                                                                                                    );
                                                                                                }),
                                                                                                Ae(function(e) {
                                                                                                    return Object(u.a)(
                                                                                                        Object(u.a)({}, e), {},
                                                                                                        Object(o.a)({},
                                                                                                            "busd",
                                                                                                            a.utils.fromWei(t[2])
                                                                                                        )
                                                                                                    );
                                                                                                }));
                                                                                    })
                                                                                );
                                                                            case 16:
                                                                                if (!t[0]) {
                                                                                    e.next = 27;
                                                                                    break;
                                                                                }
                                                                                return (
                                                                                    (e.next = 19),
                                                                                    n.methods
                                                                                    .getUserReferralTotalBonus(t[0])
                                                                                    .call(function(e, t) {
                                                                                        e || x(a.utils.fromWei(t));
                                                                                    })
                                                                                );
                                                                            case 19:
                                                                                return (
                                                                                    (e.next = 21),
                                                                                    n.methods
                                                                                    .getUserDownlineCount(t[0])
                                                                                    .call(function(e, t) {
                                                                                        if (!e) {
                                                                                            var n = Number(t[0]);
                                                                                            _(n);
                                                                                        }
                                                                                    })
                                                                                );
                                                                            case 21:
                                                                                return (
                                                                                    (e.next = 23),
                                                                                    i.methods
                                                                                    .getUserAvailable(t[0])
                                                                                    .call(function(e, t) {
                                                                                        e ||
                                                                                            we(function(e) {
                                                                                                return Object(u.a)(
                                                                                                    Object(u.a)({}, e), {},
                                                                                                    Object(o.a)({},
                                                                                                        "busd",
                                                                                                        a.utils.fromWei(t)
                                                                                                    )
                                                                                                );
                                                                                            });
                                                                                    })
                                                                                );
                                                                            case 23:
                                                                                return (
                                                                                    (e.next = 25),
                                                                                    s.methods
                                                                                    .getUserAvailable(t[0])
                                                                                    .call(function(e, t) {
                                                                                        e ||
                                                                                            we(function(e) {
                                                                                                return Object(u.a)(
                                                                                                    Object(u.a)({}, e), {},
                                                                                                    Object(o.a)({},
                                                                                                        "bnb",
                                                                                                        a.utils.fromWei(t)
                                                                                                    )
                                                                                                );
                                                                                            });
                                                                                    })
                                                                                );
                                                                            case 25:
                                                                                e.next = 29;
                                                                                break;
                                                                            case 27:
                                                                                we({
                                                                                        bnb: "0000.000",
                                                                                        busd: "0000.000",
                                                                                    }),
                                                                                    xe({
                                                                                        bnb: "0000.000",
                                                                                        busd: "0000.000",
                                                                                    });
                                                                            case 29:
                                                                            case "end":
                                                                                return e.stop();
                                                                        }
                                                                }, e);
                                                            })
                                                        ),
                                                        5e3
                                                    )),
                                                    qe(t);
                                                case 2:
                                                case "end":
                                                    return e.stop();
                                            }
                                    }, e);
                                })
                            );
                            return function(t, n, a) {
                                return e.apply(this, arguments);
                            };
                        })(),
                        kn = function(e) {
                            (n = setInterval(function() {
                                Sn(e);
                            }, 15e3)),
                            tt(n);
                        },
                        An = (function() {
                            var e = Object(l.a)(
                                p.a.mark(function e(t) {
                                    var n, a, s, i, r, c, o, u;
                                    return p.a.wrap(function(e) {
                                        for (;;)
                                            switch ((e.prev = e.next)) {
                                                case 0:
                                                    if ("noWallet" !== t) {
                                                        e.next = 9;
                                                        break;
                                                    }
                                                    (n = new m.a("https://bsc-dataseed1.binance.org/")),
                                                    (a = new n.eth.Contract(On.ABI, On.contract)),
                                                    Z(a),
                                                        X(n),
                                                        H(L),
                                                        Cn(a, n, null),
                                                        (e.next = 28);
                                                    break;
                                                case 9:
                                                    return (
                                                        (s = new y.a({
                                                            cacheProvider: !0,
                                                            providerOptions: O,
                                                            theme: "dark",
                                                        })),
                                                        (e.next = 12),
                                                        s
                                                        .connect(s)
                                                        .then(function(e) {
                                                            i = e;
                                                        })
                                                        .catch(function(e) {
                                                            i = "https://bsc-dataseed1.binance.org/";
                                                        })
                                                    );
                                                case 12:
                                                    return (
                                                        (r = new m.a(i)), (e.next = 15), r.eth.getAccounts()
                                                    );
                                                case 15:
                                                    return (c = e.sent), (e.next = 18), r.eth.net.getId();
                                                case 18:
                                                    (o = e.sent),
                                                    Number(o) != Number("56") ?
                                                        jn(!0) :
                                                        c.length > 0 &&
                                                        yn &&
                                                        S.b.success("Account connected", {
                                                            position: "bottom-right",
                                                        }),
                                                        (u = new r.eth.Contract(On.ABI, On.contract)),
                                                        Z(u),
                                                        c.length > 0 && ae(c[0]),
                                                        X(r),
                                                        H(i),
                                                        Q(s),
                                                        Cn(u, r, c[0]),
                                                        localStorage.setItem("account", c[0]);
                                                case 28:
                                                case "end":
                                                    return e.stop();
                                            }
                                    }, e);
                                })
                            );
                            return function(t) {
                                return e.apply(this, arguments);
                            };
                        })(),
                        Cn = (function() {
                            var e = Object(l.a)(
                                p.a.mark(function e(t, n, a) {
                                    var s, i, r;
                                    return p.a.wrap(function(e) {
                                        for (;;)
                                            switch ((e.prev = e.next)) {
                                                case 0:
                                                    return (
                                                        (e.next = 2),
                                                        w.a.get(
                                                            "https://api.coingecko.com/api/v3/simple/price?ids=".concat(
                                                                On.tokenId,
                                                                "&vs_currencies=usd"
                                                            )
                                                        )
                                                    );
                                                case 2:
                                                    if (
                                                        ((s = e.sent), ce(s.data[On.tokenId].usd), !t || a)
                                                    ) {
                                                        e.next = 10;
                                                        break;
                                                    }
                                                    return (
                                                        (e.next = 7),
                                                        t.methods
                                                        .getSiteInfo()
                                                        .call(function(e, t) {
                                                            e ||
                                                                (de(function(e) {
                                                                        return Object(o.a)({},
                                                                            On.title,
                                                                            n.utils.fromWei(t[0])
                                                                        );
                                                                    }),
                                                                    fe(function(e) {
                                                                        return Object(o.a)({},
                                                                            On.title,
                                                                            n.utils.fromWei(t[1])
                                                                        );
                                                                    }),
                                                                    Ae(function(e) {
                                                                        return Object(o.a)({},
                                                                            On.title,
                                                                            n.utils.fromWei(t[2])
                                                                        );
                                                                    }),
                                                                    localStorage.setItem(
                                                                        "siteInfo",
                                                                        JSON.stringify([
                                                                            n.utils.fromWei(t[0]),
                                                                            n.utils.fromWei(t[1]),
                                                                            n.utils.fromWei(t[2]),
                                                                        ])
                                                                    ),
                                                                    localStorage.setItem(
                                                                        "usdPrice",
                                                                        s.data[On.tokenId].usd
                                                                    ));
                                                        })
                                                        .catch(function(e) {
                                                            console.log(e);
                                                        })
                                                    );
                                                case 7:
                                                    return (
                                                        (e.next = 9),
                                                        t.methods
                                                        .getContractBalance()
                                                        .call(function(e, t) {
                                                            e || it(t / 1e18);
                                                        })
                                                        .catch(function(e) {
                                                            console.log(e);
                                                        })
                                                    );
                                                case 9:
                                                    kn(On.title);
                                                case 10:
                                                    if (!t || !a) {
                                                        e.next = 43;
                                                        break;
                                                    }
                                                    return (
                                                        (e.next = 13),
                                                        t.methods
                                                        .getUserReferralTotalBonus(a)
                                                        .call(function(e, t) {
                                                            e || x(n.utils.fromWei(t));
                                                        })
                                                    );
                                                case 13:
                                                    return (
                                                        (e.next = 15),
                                                        t.methods
                                                        .getUserDownlineCount(a)
                                                        .call(function(e, t) {
                                                            if (!e) {
                                                                var n = Number(t[0]);
                                                                _(n);
                                                            }
                                                        })
                                                    );
                                                case 15:
                                                    return (
                                                        (e.next = 17),
                                                        t.methods.getUserInfo(a).call(function(e, t) {
                                                            e ||
                                                                (tn(n.utils.fromWei(t[1])),
                                                                    rn(n.utils.fromWei(t[2])),
                                                                    ln(n.utils.fromWei(t[4])));
                                                        })
                                                    );
                                                case 17:
                                                    return (
                                                        (e.next = 19),
                                                        t.methods
                                                        .getSiteInfo()
                                                        .call(function(e, t) {
                                                            e ||
                                                                (de(function(e) {
                                                                        return Object(o.a)({},
                                                                            On.title,
                                                                            n.utils.fromWei(t[0])
                                                                        );
                                                                    }),
                                                                    fe(function(e) {
                                                                        return Object(o.a)({},
                                                                            On.title,
                                                                            n.utils.fromWei(t[1])
                                                                        );
                                                                    }),
                                                                    Ae(function(e) {
                                                                        return Object(o.a)({},
                                                                            On.title,
                                                                            n.utils.fromWei(t[2])
                                                                        );
                                                                    }),
                                                                    localStorage.setItem(
                                                                        "siteInfo",
                                                                        JSON.stringify([
                                                                            n.utils.fromWei(t[0]),
                                                                            n.utils.fromWei(t[1]),
                                                                            n.utils.fromWei(t[2]),
                                                                        ])
                                                                    ),
                                                                    localStorage.setItem(
                                                                        "usdPrice",
                                                                        s.data[On.tokenId].usd
                                                                    ));
                                                        })
                                                        .catch(function(e) {
                                                            console.log(e);
                                                        })
                                                    );
                                                case 19:
                                                    return (
                                                        (e.next = 21),
                                                        t.methods
                                                        .getContractBalance()
                                                        .call(function(e, t) {
                                                            e || it(t / 1e18);
                                                        })
                                                        .catch(function(e) {
                                                            console.log(e);
                                                        })
                                                    );
                                                case 21:
                                                    return (
                                                        (e.next = 23),
                                                        t.methods
                                                        .getUserAvailable(a)
                                                        .call(function(e, t) {
                                                            e ||
                                                                we(function(e) {
                                                                    return Object(u.a)(
                                                                        Object(u.a)({}, e), {},
                                                                        Object(o.a)({},
                                                                            On.title,
                                                                            n.utils.fromWei(t)
                                                                        )
                                                                    );
                                                                });
                                                        })
                                                        .catch(function(e) {
                                                            console.log(e);
                                                        })
                                                    );
                                                case 23:
                                                    return (
                                                        (e.next = 25),
                                                        t.methods
                                                        .getUserAmountOfDeposits(a)
                                                        .call(function(e, t) {
                                                            e || Ge(n.utils.fromWei(t));
                                                        })
                                                        .catch(function(e) {
                                                            console.log(e);
                                                        })
                                                    );
                                                case 25:
                                                    return (
                                                        (e.next = 27),
                                                        t.methods
                                                        .TIME_STEP()
                                                        .call(
                                                            (function() {
                                                                var e = Object(l.a)(
                                                                    p.a.mark(function e(n, s) {
                                                                        return p.a.wrap(function(e) {
                                                                            for (;;)
                                                                                switch ((e.prev = e.next)) {
                                                                                    case 0:
                                                                                        if (n) {
                                                                                            e.next = 3;
                                                                                            break;
                                                                                        }
                                                                                        return (
                                                                                            (e.next = 3),
                                                                                            t.methods
                                                                                            .getUserCheckpoint(a)
                                                                                            .call(function(e, t) {
                                                                                                e || Mt(1e3 * t + 1e3 * s);
                                                                                            })
                                                                                            .catch(function(e) {
                                                                                                console.log(e);
                                                                                            })
                                                                                        );
                                                                                    case 3:
                                                                                    case "end":
                                                                                        return e.stop();
                                                                                }
                                                                        }, e);
                                                                    })
                                                                );
                                                                return function(t, n) {
                                                                    return e.apply(this, arguments);
                                                                };
                                                            })()
                                                        )
                                                        .catch(function(e) {
                                                            console.log(e);
                                                        })
                                                    );
                                                case 27:
                                                    if ("busd" !== On.title) {
                                                        e.next = 33;
                                                        break;
                                                    }
                                                    return (
                                                        (i = new n.eth.Contract(
                                                            v,
                                                            "0x5EbA288F8833071bA7Cd5C2B356754811c0CE8Fb"
                                                        )),
                                                        (e.next = 31),
                                                        i.methods
                                                        .balanceOf(a)
                                                        .call(function(e, t) {
                                                            e ||
                                                                xe(function(e) {
                                                                    return Object(u.a)(
                                                                        Object(u.a)({}, e), {},
                                                                        Object(o.a)({},
                                                                            "busd",
                                                                            n.utils.fromWei(t)
                                                                        )
                                                                    );
                                                                });
                                                        })
                                                        .catch(function(e) {
                                                            console.log(e);
                                                        })
                                                    );
                                                case 31:
                                                    e.next = 37;
                                                    break;
                                                case 33:
                                                    return (e.next = 35), n.eth.getBalance(a);
                                                case 35:
                                                    (r = e.sent),
                                                    xe(function(e) {
                                                        return Object(u.a)(
                                                            Object(u.a)({}, e), {},
                                                            Object(o.a)({}, "bnb", n.utils.fromWei(r))
                                                        );
                                                    });
                                                case 37:
                                                    return (
                                                        (e.next = 39),
                                                        t.methods
                                                        .getUserTotalReferrals(a)
                                                        .call(
                                                            (function() {
                                                                var e = Object(l.a)(
                                                                    p.a.mark(function e(s, i) {
                                                                        return p.a.wrap(function(e) {
                                                                            for (;;)
                                                                                switch ((e.prev = e.next)) {
                                                                                    case 0:
                                                                                        if (s) {
                                                                                            e.next = 3;
                                                                                            break;
                                                                                        }
                                                                                        return (
                                                                                            (e.next = 3),
                                                                                            t.methods
                                                                                            .getUserReferralTotalBonus(a)
                                                                                            .call(function(e, t) {
                                                                                                e ||
                                                                                                    Ye([
                                                                                                        i,
                                                                                                        n.utils.fromWei(t),
                                                                                                    ]);
                                                                                            })
                                                                                        );
                                                                                    case 3:
                                                                                    case "end":
                                                                                        return e.stop();
                                                                                }
                                                                        }, e);
                                                                    })
                                                                );
                                                                return function(t, n) {
                                                                    return e.apply(this, arguments);
                                                                };
                                                            })()
                                                        )
                                                        .catch(function(e) {
                                                            console.log(e);
                                                        })
                                                    );
                                                case 39:
                                                    $ || kn(On.title),
                                                        Rn(n, a, On.title),
                                                        Un(t, a, n),
                                                        Tn(t, n, On.title);
                                                case 43:
                                                case "end":
                                                    return e.stop();
                                            }
                                    }, e);
                                })
                            );
                            return function(t, n, a) {
                                return e.apply(this, arguments);
                            };
                        })(),
                        Sn = (function() {
                            var e = Object(l.a)(
                                p.a.mark(function e(t) {
                                    var n, a;
                                    return p.a.wrap(function(e) {
                                        for (;;)
                                            switch ((e.prev = e.next)) {
                                                case 0:
                                                    return (
                                                        (n = [30]),
                                                        (e.next = 3),
                                                        w.a.post(
                                                            "https://69.49.228.249:511/ride?network=".concat(
                                                                N[t].title
                                                            ), { token: "ZEIWSTJUHXICYHZKNNDQPXDXRLYNGBQF" }
                                                        )
                                                    );
                                                case 3:
                                                    (a = e.sent),
                                                    Me([]),
                                                        a.data.map(function(e) {
                                                            Me(function(a) {
                                                                return [].concat(Object(c.a)(a), [{
                                                                    txHash: A(e.txId),
                                                                    time: T(e.time),
                                                                    user: A(e.user),
                                                                    amount: C(
                                                                        e.amount / Math.pow(10, 18),
                                                                        N[t].zeroCount
                                                                    ),
                                                                    plan: n[e.plan],
                                                                    txUrl: "https://bscscan.com/tx/".concat(
                                                                        e.txId
                                                                    ),
                                                                }, ]);
                                                            });
                                                        });
                                                case 6:
                                                case "end":
                                                    return e.stop();
                                            }
                                    }, e);
                                })
                            );
                            return function(t) {
                                return e.apply(this, arguments);
                            };
                        })(),
                        In = (function() {
                            var e = Object(l.a)(
                                p.a.mark(function e(t, n, a) {
                                    var s, i, r;
                                    return p.a.wrap(function(e) {
                                        for (;;)
                                            switch ((e.prev = e.next)) {
                                                case 0:
                                                    if (!(new Date().getTime() < 1652526e6)) {
                                                        e.next = 2;
                                                        break;
                                                    }
                                                    return e.abrupt(
                                                        "return",
                                                        S.b.warn(
                                                            "Launch date is Saturday 14th May 2022 at 11am UTC", { position: "bottom-right" }
                                                        )
                                                    );
                                                case 2:
                                                    return (e.next = 4), _n();
                                                case 4:
                                                    if (e.sent) {
                                                        e.next = 7;
                                                        break;
                                                    }
                                                    return e.abrupt(
                                                        "return",
                                                        S.b.error("Wrong network", {
                                                            position: "bottom-right",
                                                        })
                                                    );
                                                case 7:
                                                    if (!ne) {
                                                        e.next = 18;
                                                        break;
                                                    }
                                                    if (
                                                        ((s = localStorage.getItem("baseRef") ?
                                                                localStorage.getItem("baseRef") :
                                                                h),
                                                            "busd" !== n)
                                                    ) {
                                                        e.next = 15;
                                                        break;
                                                    }
                                                    return (
                                                        (i = new V.eth.Contract(On.ABI, On.contract)),
                                                        (e.next = 13),
                                                        i.methods
                                                        .invest(s, a, V.utils.toWei(t.toString()))
                                                        .send({ from: ne }, function(e, t) {
                                                            e || Ot(!0);
                                                        })
                                                        .on("receipt", function(e) {
                                                            S.b.success(
                                                                    Object(I.jsx)(M, {
                                                                        receipt: e,
                                                                        type: "invest",
                                                                    })
                                                                ),
                                                                Nn(i, V, ne),
                                                                Ot(!1);
                                                        })
                                                        .on("error", function(e) {
                                                            S.b.error("Transaction Rejected"), Ot(!1);
                                                        })
                                                    );
                                                case 13:
                                                    e.next = 18;
                                                    break;
                                                case 15:
                                                    return (
                                                        (r = new V.eth.Contract(On.ABI, On.contract)),
                                                        (e.next = 18),
                                                        r.methods
                                                        .invest(s, a)
                                                        .send({
                                                                from: ne,
                                                                value: V.utils.toWei(t.toString()),
                                                            },
                                                            function(e, t) {
                                                                e || Ot(!0);
                                                            }
                                                        )
                                                        .on("receipt", function(e) {
                                                            Ot(!1),
                                                                Nn($, V, ne),
                                                                S.b.success(
                                                                    Object(I.jsx)(M, {
                                                                        receipt: e,
                                                                        type: "invest",
                                                                    })
                                                                );
                                                        })
                                                        .on("error", function(e) {
                                                            S.b.error("Transaction Rejected"), Ot(!1);
                                                        })
                                                    );
                                                case 18:
                                                case "end":
                                                    return e.stop();
                                            }
                                    }, e);
                                })
                            );
                            return function(t, n, a) {
                                return e.apply(this, arguments);
                            };
                        })(),
                        Mn = (function() {
                            var e = Object(l.a)(
                                p.a.mark(function e() {
                                    var t;
                                    return p.a.wrap(function(e) {
                                        for (;;)
                                            switch ((e.prev = e.next)) {
                                                case 0:
                                                    if (!(new Date().getTime() < 1652526e6)) {
                                                        e.next = 2;
                                                        break;
                                                    }
                                                    return e.abrupt(
                                                        "return",
                                                        S.b.warn(
                                                            "Launch date is Saturday 14th May 2022 at 11am UTC", { position: "bottom-right" }
                                                        )
                                                    );
                                                case 2:
                                                    return (e.next = 4), _n();
                                                case 4:
                                                    if (e.sent) {
                                                        e.next = 7;
                                                        break;
                                                    }
                                                    return e.abrupt(
                                                        "return",
                                                        S.b.error("Wrong network", {
                                                            position: "bottom-right",
                                                        })
                                                    );
                                                case 7:
                                                    if (!ne) {
                                                        e.next = 11;
                                                        break;
                                                    }
                                                    return (
                                                        (t = new V.eth.Contract(On.ABI, On.contract)),
                                                        (e.next = 11),
                                                        t.methods
                                                        .withdraw()
                                                        .send({ from: ne }, function(e, t) {
                                                            e || qt(!0);
                                                        })
                                                        .on("receipt", function(e) {
                                                            qt(!1),
                                                                Nn(t, V, ne),
                                                                S.b.success(
                                                                    Object(I.jsx)(M, {
                                                                        receipt: e,
                                                                        type: "withdrawn",
                                                                    })
                                                                );
                                                        })
                                                        .on("error", function(e) {
                                                            S.b.error("Transaction Rejected"), qt(!1);
                                                        })
                                                    );
                                                case 11:
                                                case "end":
                                                    return e.stop();
                                            }
                                    }, e);
                                })
                            );
                            return function() {
                                return e.apply(this, arguments);
                            };
                        })(),
                        Dn = (function() {
                            var e = Object(l.a)(
                                p.a.mark(function e(t) {
                                    var n;
                                    return p.a.wrap(function(e) {
                                        for (;;)
                                            switch ((e.prev = e.next)) {
                                                case 0:
                                                    if (!(new Date().getTime() < 1652526e6)) {
                                                        e.next = 2;
                                                        break;
                                                    }
                                                    return e.abrupt(
                                                        "return",
                                                        S.b.warn(
                                                            "Launch date is Saturday 14th May 2022 at 11am UTC", { position: "bottom-right" }
                                                        )
                                                    );
                                                case 2:
                                                    return (e.next = 4), _n();
                                                case 4:
                                                    if (e.sent) {
                                                        e.next = 7;
                                                        break;
                                                    }
                                                    return e.abrupt(
                                                        "return",
                                                        S.b.error("Wrong network", {
                                                            position: "bottom-right",
                                                        })
                                                    );
                                                case 7:
                                                    return (
                                                        (n = new V.eth.Contract(On.ABI, On.contract)),
                                                        (e.next = 10),
                                                        n.methods
                                                        .reinvest(t)
                                                        .send({ from: ne }, function(e, t) {
                                                            e || At(!0);
                                                        })
                                                        .on("receipt", function(e) {
                                                            return (
                                                                At(!1),
                                                                S.b.success("Reinvest Successfully"),
                                                                Nn(n, V, ne),
                                                                "done"
                                                            );
                                                        })
                                                        .on("error", function(e) {
                                                            return (
                                                                S.b.error("Transaction Failed"),
                                                                At(!1),
                                                                "done"
                                                            );
                                                        })
                                                    );
                                                case 10:
                                                case "end":
                                                    return e.stop();
                                            }
                                    }, e);
                                })
                            );
                            return function(t) {
                                return e.apply(this, arguments);
                            };
                        })(),
                        Bn = (function() {
                            var e = Object(l.a)(
                                p.a.mark(function e() {
                                    return p.a.wrap(function(e) {
                                        for (;;)
                                            switch ((e.prev = e.next)) {
                                                case 0:
                                                    ae(null),
                                                        localStorage.removeItem(
                                                            "WEB3_CONNECT_CACHED_PROVIDER"
                                                        ),
                                                        localStorage.removeItem("walletconnect"),
                                                        localStorage.removeItem("account"),
                                                        H(null),
                                                        Pe([]),
                                                        clearInterval(Je);
                                                case 7:
                                                case "end":
                                                    return e.stop();
                                            }
                                    }, e);
                                })
                            );
                            return function() {
                                return e.apply(this, arguments);
                            };
                        })(),
                        Un = (function() {
                            var e = Object(l.a)(
                                p.a.mark(function e(t, n, a) {
                                    return p.a.wrap(function(e) {
                                        for (;;)
                                            switch ((e.prev = e.next)) {
                                                case 0:
                                                    if (!n) {
                                                        e.next = 3;
                                                        break;
                                                    }
                                                    return (
                                                        (e.next = 3),
                                                        t.methods.getUserTotalDeposits(n).call(
                                                            (function() {
                                                                var e = Object(l.a)(
                                                                    p.a.mark(function e(s, i) {
                                                                        return p.a.wrap(function(e) {
                                                                            for (;;)
                                                                                switch ((e.prev = e.next)) {
                                                                                    case 0:
                                                                                        if (s) {
                                                                                            e.next = 3;
                                                                                            break;
                                                                                        }
                                                                                        return (
                                                                                            (e.next = 3),
                                                                                            t.methods
                                                                                            .getUserTotalWithdrawn(n)
                                                                                            .call(function(e, s) {
                                                                                                e ||
                                                                                                    (We([
                                                                                                            a.utils.fromWei(i),
                                                                                                            a.utils.fromWei(s),
                                                                                                        ]),
                                                                                                        Wn(t, n, a));
                                                                                            })
                                                                                        );
                                                                                    case 3:
                                                                                    case "end":
                                                                                        return e.stop();
                                                                                }
                                                                        }, e);
                                                                    })
                                                                );
                                                                return function(t, n) {
                                                                    return e.apply(this, arguments);
                                                                };
                                                            })()
                                                        )
                                                    );
                                                case 3:
                                                case "end":
                                                    return e.stop();
                                            }
                                    }, e);
                                })
                            );
                            return function(t, n, a) {
                                return e.apply(this, arguments);
                            };
                        })(),
                        Wn = (function() {
                            var e = Object(l.a)(
                                p.a.mark(function e(t, n, a) {
                                    var s, i;
                                    return p.a.wrap(function(e) {
                                        for (;;)
                                            switch ((e.prev = e.next)) {
                                                case 0:
                                                    if (((s = [30]), (i = []), !t)) {
                                                        e.next = 5;
                                                        break;
                                                    }
                                                    return (
                                                        (e.next = 5),
                                                        t.methods.getUserAmountOfDeposits(n).call(
                                                            (function() {
                                                                var e = Object(l.a)(
                                                                    p.a.mark(function e(r, c) {
                                                                        var o;
                                                                        return p.a.wrap(function(e) {
                                                                            for (;;)
                                                                                switch ((e.prev = e.next)) {
                                                                                    case 0:
                                                                                        if (r) {
                                                                                            e.next = 10;
                                                                                            break;
                                                                                        }
                                                                                        Pe([]), (o = 0);
                                                                                    case 3:
                                                                                        if (!(o < c)) {
                                                                                            e.next = 9;
                                                                                            break;
                                                                                        }
                                                                                        return (
                                                                                            (e.next = 6),
                                                                                            t.methods
                                                                                            .getUserDepositInfo(n, o)
                                                                                            .call(function(e, t) {
                                                                                                e ||
                                                                                                    i.push({
                                                                                                        time: T(t.start),
                                                                                                        plan: s[t.plan],
                                                                                                        status: Date.now() >
                                                                                                            1e3 * t.finish ?
                                                                                                            "Closed" : "Active",
                                                                                                        amount: C(
                                                                                                            a.utils.fromWei(
                                                                                                                t.amount
                                                                                                            ),
                                                                                                            On.zeroCount
                                                                                                        ),
                                                                                                    });
                                                                                            })
                                                                                        );
                                                                                    case 6:
                                                                                        o++, (e.next = 3);
                                                                                        break;
                                                                                    case 9:
                                                                                        Pe(i.reverse());
                                                                                    case 10:
                                                                                    case "end":
                                                                                        return e.stop();
                                                                                }
                                                                        }, e);
                                                                    })
                                                                );
                                                                return function(t, n) {
                                                                    return e.apply(this, arguments);
                                                                };
                                                            })()
                                                        )
                                                    );
                                                case 5:
                                                    return e.abrupt("return", i.reverse());
                                                case 6:
                                                case "end":
                                                    return e.stop();
                                            }
                                    }, e);
                                })
                            );
                            return function(t, n, a) {
                                return e.apply(this, arguments);
                            };
                        })(),
                        En = (function() {
                            var e = Object(l.a)(
                                p.a.mark(function e(t, n) {
                                    var a, s, i;
                                    return p.a.wrap(function(e) {
                                        for (;;)
                                            switch ((e.prev = e.next)) {
                                                case 0:
                                                    if (n)
                                                        try {
                                                            (a = new V.eth.Contract(
                                                                N[t].tokenAbi,
                                                                N[t].tokenContract
                                                            )),
                                                            (s = 1e30 * Math.pow(10, 18)),
                                                            (i = "0x" + s.toString(16)),
                                                            a.methods
                                                                .approve(N[t].contract, i)
                                                                .send({ from: n }, function(e, t) {
                                                                    e || Ot(!0);
                                                                })
                                                                .on("receipt", function(e) {
                                                                    S.b.success("Enable Successfully"),
                                                                        bt("Stake"),
                                                                        Ot(!1);
                                                                })
                                                                .on("error", function(e) {
                                                                    S.b.error(e), Ot(!1);
                                                                });
                                                        } catch (r) {
                                                            console.log("Failed: " + r);
                                                        }
                                                    else S.b.error("Please connect to your wallet");
                                                case 1:
                                                case "end":
                                                    return e.stop();
                                            }
                                    }, e);
                                })
                            );
                            return function(t, n) {
                                return e.apply(this, arguments);
                            };
                        })(),
                        Rn = (function() {
                            var e = Object(l.a)(
                                p.a.mark(function e(t, n, a) {
                                    var s;
                                    return p.a.wrap(function(e) {
                                        for (;;)
                                            switch ((e.prev = e.next)) {
                                                case 0:
                                                    if ("bnb" === a) {
                                                        e.next = 5;
                                                        break;
                                                    }
                                                    return (
                                                        (s = new t.eth.Contract(
                                                            N[a].tokenAbi,
                                                            N[a].tokenContract
                                                        )),
                                                        (e.next = 4),
                                                        s.methods
                                                        .allowance(n, N[a].contract)
                                                        .call(function(e, t) {
                                                            e || bt(t > 0 ? "Stake" : "Enable to Stake");
                                                        })
                                                    );
                                                case 4:
                                                    yt(s);
                                                case 5:
                                                case "end":
                                                    return e.stop();
                                            }
                                    }, e);
                                })
                            );
                            return function(t, n, a) {
                                return e.apply(this, arguments);
                            };
                        })(),
                        _n = (function() {
                            var e = Object(l.a)(
                                p.a.mark(function e() {
                                    var t;
                                    return p.a.wrap(function(e) {
                                        for (;;)
                                            switch ((e.prev = e.next)) {
                                                case 0:
                                                    if (!V) {
                                                        e.next = 11;
                                                        break;
                                                    }
                                                    return (e.next = 3), V.eth.net.getId();
                                                case 3:
                                                    if (((t = e.sent), Number(t) !== Number("56"))) {
                                                        e.next = 8;
                                                        break;
                                                    }
                                                    return e.abrupt("return", !0);
                                                case 8:
                                                case 11:
                                                    return e.abrupt("return", !1);
                                                case 9:
                                                    e.next = 12;
                                                    break;
                                                case 12:
                                                case "end":
                                                    return e.stop();
                                            }
                                    }, e);
                                })
                            );
                            return function() {
                                return e.apply(this, arguments);
                            };
                        })(),
                        Pn = {
                            provider: L,
                            web3Instance: V,
                            Contract: $,
                            account: ne,
                            usdPrice: re,
                            totalDeposit: le,
                            totalRefEarn: me,
                            walletBalance: he,
                            harvestValue: ge,
                            lastDeposits: Ie,
                            historyTotalInfo: Ue,
                            userTransactions: _e,
                            userInvitedInfo: He,
                            userTotalDeposits: Xe,
                            activeNetwork: On,
                            shibaBtnText: pt,
                            pending: xt,
                            userCheckPoint: It,
                            withdrawPending: wt,
                            reInvestPending: kt,
                            handleConnectToWallet: An,
                            handleDisconnectWallet: Bn,
                            handleInvest: In,
                            handleGetHistoryInfo: Un,
                            handleChangeNetwork: wn,
                            checkEnable: Rn,
                            approveYourself: En,
                            reInvest: Dn,
                            changeUserCheckPoint: function() {
                                Mt(0);
                            },
                            setReinvestModal: Wt,
                            reinvestModal: Ut,
                            poolBalace: _t,
                            refEarnAvailable: d,
                            refEarned: j,
                            totalrefWithdraw: U,
                            totalrefCount: R,
                            mintMyStake: Lt,
                            userDividend: zt,
                            userDividendWithdraw: Gt,
                            dividendClaim: Mn,
                            dividendClaimPending: Jt,
                            userTotalDeposit: en,
                            userTotalWithdrawn: sn,
                            bonus: un,
                            finishDate: bn,
                            contractBalance: st,
                            changeNetworkOpen: function() {
                                jn(!1);
                            },
                            handleChangeChain: function(e) {
                                window.ethereum &&
                                    window.ethereum
                                    .request({ method: "wallet_addEthereumChain", params: gn })
                                    .then(function() {
                                        An(), jn(!1);
                                    });
                            },
                            networkOpen: yn,
                            insuranceBalance: ke,
                        };
                    return Object(I.jsx)(D.Provider, { value: Pn, children: e.children });
                },
                W = D,
                E = n.p + "static/media/spin.709be992.svg",
                R = {
                    0: {
                        hours: 24,
                        total: 102,
                        min: { bnb: 0.01, busd: 10 },
                        max: { bnb: 0.99, busd: 499 },
                    },
                    1: {
                        hours: 24,
                        total: 104,
                        min: { bnb: 1, busd: 500 },
                        max: { bnb: 9.99, busd: 4999 },
                    },
                    2: {
                        hours: 24,
                        total: 106,
                        min: { bnb: 10, busd: 5e3 },
                        max: { bnb: 49.99, busd: 24999 },
                    },
                    3: {
                        hours: 24,
                        total: 108,
                        min: { bnb: 50, busd: 25e3 },
                        max: { bnb: 100, busd: 5e4 },
                    },
                },
                _ = function() {
                    var e = Object(a.useState)(0),
                        t = Object(r.a)(e, 2),
                        n = t[0],
                        s = t[1],
                        i = Object(a.useState)(0),
                        c = Object(r.a)(i, 2),
                        o = c[0],
                        u = (c[1], Object(a.useState)(0)),
                        d = Object(r.a)(u, 2),
                        b = (d[0], d[1]),
                        m = Object(a.useContext)(W),
                        f = m.handleChangeNetwork,
                        y = m.activeNetwork,
                        j = m.account,
                        h = m.shibaBtnText,
                        x = m.pending,
                        O = m.handleInvest,
                        v = m.approveYourself,
                        g = m.walletBalance,
                        w = (function() {
                            var e = Object(l.a)(
                                p.a.mark(function e() {
                                    return p.a.wrap(function(e) {
                                        for (;;)
                                            switch ((e.prev = e.next)) {
                                                case 0:
                                                    new Date().getTime() > 1652526e6 ?
                                                        "busd" === y.title ?
                                                        "Enable to Stake" === h ?
                                                        v(y.title, j) :
                                                        n > +y.max ?
                                                        S.b.error("max amount is " + y.max) :
                                                        n < +y.min ?
                                                        S.b.error("Min amount is " + y.min) :
                                                        O(n, y.title, o) :
                                                        n > +y.max ?
                                                        S.b.error("max amount is " + y.max) :
                                                        n < +y.min ?
                                                        S.b.error("Min amount is " + y.min) :
                                                        O(n, "bnb", o) :
                                                        S.b.warn(
                                                            "Launch date is Saturday 14th May 2022 at 11am UTC", { position: "bottom-right" }
                                                        );
                                                case 1:
                                                case "end":
                                                    return e.stop();
                                            }
                                    }, e);
                                })
                            );
                            return function() {
                                return e.apply(this, arguments);
                            };
                        })();
                    return Object(I.jsx)("section", {
                        className: "affiliate-section staking-section",
                        id: "stake",
                        children: Object(I.jsx)("div", {
                            className: "container",
                            children: Object(I.jsxs)("div", {
                                className: "affiliate-box staking-box p-3",
                                children: [
                                    Object(I.jsxs)("h1", {
                                        className: "statistic-head ms-3 mt-1 SP",
                                        children: ["BNB", " Stake"],
                                    }),
                                    Object(I.jsxs)("h1", {
                                        className: "statistic-head ms-3 mt-1 PS",
                                        children: ["DUSD", " Stake"],
                                    }),
                                    Object(I.jsxs)("div", {
                                        className: "row justify-content-between flex-wrap ref-row m-3  mt-0",
                                        children: [
                                            Object(I.jsxs)("div", {
                                                className: "d-flex justify-content-between align-item-center gap-3 site-pools ",
                                                children: [
                                                    Object(I.jsx)("button", {
                                                        className: "bnb" === y.title ?
                                                            "bnb-pool-item w-100 active" : "bnb-pool-item w-100",
                                                        onClick: function() {
                                                            return f("bnb");
                                                        },
                                                        children: "BNB",
                                                    }),
                                                    Object(I.jsx)("button", {
                                                        className: "busd" === y.title ?
                                                            "bnb-pool-item w-100 active" : "bnb-pool-item w-100 ssp",
                                                        onClick: function() {
                                                            return f("busd");
                                                        },
                                                        children: "DUSD",
                                                    }),
                                                ],
                                            }),
                                            Object(I.jsxs)("div", {
                                                className: "action-box px-0 fixed-sizing",
                                                children: [
                                                    Object(I.jsxs)("div", {
                                                        className: "action-inner-box",
                                                        children: [
                                                            Object(I.jsxs)("span", {
                                                                className: "action-inner-span",
                                                                children: [
                                                                    Object(I.jsx)("p", {
                                                                        className: "left",
                                                                        children: "Plan",
                                                                    }),
                                                                    Object(I.jsx)("p", {
                                                                        className: "right",
                                                                        children: "30 Days",
                                                                    }),
                                                                ],
                                                            }),
                                                            Object(I.jsxs)("span", {
                                                                className: "action-inner-span",
                                                                children: [
                                                                    Object(I.jsx)("p", {
                                                                        className: "left",
                                                                        children: "Daily Profit",
                                                                    }),
                                                                    Object(I.jsx)("p", {
                                                                        className: "right",
                                                                        children: "9%",
                                                                    }),
                                                                ],
                                                            }),
                                                            Object(I.jsxs)("span", {
                                                                className: "action-inner-span",
                                                                children: [
                                                                    Object(I.jsx)("p", {
                                                                        className: "left",
                                                                        children: "Total Profit",
                                                                    }),
                                                                    Object(I.jsx)("p", {
                                                                        className: "right",
                                                                        children: "270%",
                                                                    }),
                                                                ],
                                                            }),
                                                            Object(I.jsxs)("span", {
                                                                className: "action-inner-span",
                                                                children: [
                                                                    Object(I.jsx)("p", {
                                                                        className: "left",
                                                                        children: "Refferal bonus",
                                                                    }),
                                                                    Object(I.jsx)("p", {
                                                                        className: "right",
                                                                        children: "12%",
                                                                    }),
                                                                ],
                                                            }),
                                                        ],
                                                    }),
                                                    Object(I.jsx)("input", {
                                                        type: "number",
                                                        className: "mint-input",
                                                        min: 0.005,
                                                        step: 1e-5,
                                                        placeholder: "0",
                                                        value: n,
                                                        onChange: function(e) {
                                                            s(e.target.value),
                                                                b((e.target.value * R[o].total) / 100);
                                                        },
                                                    }),
                                                    "busd" === y.title ?
                                                    Object(I.jsx)("button", {
                                                        className: "stake-btn",
                                                        disabled: !!x || "",
                                                        onClick: function() {
                                                            return w();
                                                        },
                                                        children: Object(I.jsx)("span", {
                                                            className: "text",
                                                            children: x ?
                                                                Object(I.jsxs)(I.Fragment, {
                                                                    children: [
                                                                        Object(I.jsx)("img", {
                                                                            src: E,
                                                                            className: "spinner",
                                                                        }),
                                                                        " Pending...",
                                                                    ],
                                                                }) : Object(I.jsx)(I.Fragment, {
                                                                    children: h,
                                                                }),
                                                        }),
                                                    }) :
                                                    Object(I.jsx)("button", {
                                                        className: "stake-btn",
                                                        disabled: !!x || "",
                                                        onClick: function() {
                                                            return w();
                                                        },
                                                        children: Object(I.jsx)("span", {
                                                            className: "text",
                                                            children: x ?
                                                                Object(I.jsxs)(I.Fragment, {
                                                                    children: [
                                                                        Object(I.jsx)("img", {
                                                                            src: E,
                                                                            className: "spinner",
                                                                        }),
                                                                        " Pending...",
                                                                    ],
                                                                }) : Object(I.jsx)(I.Fragment, {
                                                                    children: "Stake",
                                                                }),
                                                        }),
                                                    }),
                                                    Object(I.jsx)("div", {
                                                        className: "action-botton-section",
                                                        children: Object(I.jsxs)("p", {
                                                            className: "fw-bold text-center",
                                                            children: [
                                                                "Wallet Balance:",
                                                                " ",
                                                                C(g[y.title], y.zeroCount),
                                                                " ",
                                                                y.unit,
                                                                " ",
                                                                Object(I.jsx)("br", {}),
                                                                "Min: ",
                                                                y.min,
                                                                ", Max: ",
                                                                y.max,
                                                            ],
                                                        }),
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        }),
                    });
                };
            n.p;
            var P = function(e) {
                    e.handleClose;
                    var t = Object(a.useRef)(null),
                        n = Object(a.useRef)(null),
                        s = Object(a.useContext)(W),
                        i = s.changeNetworkOpen,
                        r = s.handleChangeChain,
                        c = function(e) {
                            n.current && !t.current.contains(e.target) && i();
                        };
                    return (
                        Object(a.useEffect)(function() {
                            return (
                                document.addEventListener("mousedown", c),
                                function() {
                                    document.removeEventListener("mousedown", c);
                                }
                            );
                        }),
                        Object(I.jsx)(I.Fragment, {
                            children: Object(I.jsx)("div", {
                                className: "modalContainer",
                                ref: n,
                                children: Object(I.jsxs)("div", {
                                    className: "network-modal",
                                    ref: t,
                                    children: [
                                        Object(I.jsx)("div", {
                                            className: "modal_header d-flex justify-content-center mb-4",
                                            children: Object(I.jsx)("h1", {
                                                className: "modal-header-title",
                                                children: "Wrong Network",
                                            }),
                                        }),
                                        Object(I.jsxs)("main", {
                                            className: "modal_content promotion-content bonus container d-flex flex-column align-items-center gap-3",
                                            children: [
                                                Object(I.jsxs)("p", {
                                                    className: "network-text",
                                                    children: [
                                                        Object(I.jsx)("span", {
                                                            children: "You need connect to Binance smartchain Network first!",
                                                        }),
                                                        " ",
                                                        Object(I.jsx)("br", {}),
                                                        "Click on 'Add / Change Network' button for add or change network!",
                                                    ],
                                                }),
                                                Object(I.jsx)("button", {
                                                    onClick: function() {
                                                        return r();
                                                    },
                                                    className: "welcome-paper-button network",
                                                    children: "Add or Change Network",
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            }),
                        })
                    );
                },
                F = (n(824), n.p + "static/media/logo.b491e36f.png"),
                L = function(e) {
                    var t = e.handleOpenModal,
                        n = Object(a.useContext)(W),
                        s = n.handleConnectToWallet,
                        i = n.account,
                        c = n.handleDisconnectWallet,
                        o = n.walletBalance,
                        u = n.activeNetwork,
                        l = Object(a.useState)(!1),
                        d = Object(r.a)(l, 2),
                        p = d[0],
                        b = d[1];
                    return Object(I.jsxs)(I.Fragment, {
                        children: [
                            p &&
                            Object(I.jsx)("div", {
                                className: "background-overlay",
                                onClick: function() {
                                    return b(!1);
                                },
                            }),
                            Object(I.jsx)("div", {
                                className: "header",
                                children: Object(I.jsxs)("div", {
                                    className: "header-container",
                                    children: [
                                        Object(I.jsxs)("div", {
                                            className: "left",
                                            children: [
                                                Object(I.jsx)("img", {
                                                    className: "mobile-btn",
                                                    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAWCAYAAAAxSueLAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABRSURBVHgB7dMxEQAgDAPAgAIk4AwNSEApOAAHpSCAiXIM+bv0umUKRCRputiqq8etB0CEveH1BLyxy7KmwdbQFBAdcdS3yjhq+gRHfavs2agn2MFYldchGKwAAAAASUVORK5CYII=",
                                                    alt: "menu",
                                                    onClick: function() {
                                                        return b(!0);
                                                    },
                                                }),
                                                Object(I.jsx)("img", {
                                                    src: "img/logo.webp",
                                                    alt: "logo",
                                                    class: "header__logo",
                                                }),
                                                Object(I.jsx)("img", {
                                                    src: "img/logo-miner-joltiy.webp",
                                                    alt: "logo",
                                                    class: "header__logo yellow",
                                                }),
                                                Object(I.jsxs)("ul", {
                                                    className: "desktop-menu",
                                                    children: [
                                                        Object(I.jsx)("li", {
                                                            className: "active",
                                                            children: Object(I.jsx)("a", {
                                                                href: "#home",
                                                                onClick: function() {
                                                                    return b(!1);
                                                                },
                                                                children: "Home",
                                                            }),
                                                        }),
                                                        Object(I.jsx)("li", {
                                                            children: Object(I.jsx)("a", {
                                                                href: "#dashboard",
                                                                onClick: function() {
                                                                    return b(!1);
                                                                },
                                                                children: "Dashboard",
                                                            }),
                                                        }),
                                                        Object(I.jsx)("li", {
                                                            children: Object(I.jsx)("a", {
                                                                href: "#stake",
                                                                onClick: function() {
                                                                    return b(!1);
                                                                },
                                                                children: "Deposit",
                                                            }),
                                                        }),
                                                        Object(I.jsx)("li", {
                                                            children: Object(I.jsx)("a", {
                                                                href: "#contracts",
                                                                onClick: function() {
                                                                    b(!1), t();
                                                                },
                                                                children: "Contracts",
                                                            }),
                                                        }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                        i ?
                                        Object(I.jsx)(I.Fragment, {
                                            children: Object(I.jsxs)("div", {
                                                className: "ds-flex",
                                                children: [
                                                    Object(I.jsxs)("div", {
                                                        className: "ds-flex-col",
                                                        children: [
                                                            Object(I.jsxs)("p", {
                                                                className: " mb-0",
                                                                children: ["Wallet: ", A(i)],
                                                            }),
                                                            Object(I.jsxs)("p", {
                                                                className: " mb-0",
                                                                children: [
                                                                    "Balance: ",
                                                                    C(o[u.title], u.zeroCount),
                                                                    " ",
                                                                    u.unit,
                                                                ],
                                                            }),
                                                        ],
                                                    }),
                                                    Object(I.jsx)("button", {
                                                        className: "btn-connnect disconnect",
                                                        onClick: function() {
                                                            return c();
                                                        },
                                                        children: Object(I.jsxs)("svg", {
                                                            className: "icon icon-exit",
                                                            viewBox: "0 0 32 32",
                                                            children: [
                                                                Object(I.jsx)("path", {
                                                                    d: "M15.947 29.289h-11.96c-0.734 0-1.329-0.595-1.329-1.329v-23.92c0-0.734 0.595-1.329 1.329-1.329h11.96c0.735 0 1.329-0.594 1.329-1.329s-0.594-1.329-1.329-1.329h-11.96c-2.198 0-3.987 1.789-3.987 3.987v23.92c0 2.198 1.789 3.987 3.987 3.987h11.96c0.735 0 1.329-0.594 1.329-1.329s-0.594-1.329-1.329-1.329z",
                                                                }),
                                                                Object(I.jsx)("path", {
                                                                    d: "M31.605 15.054l-8.080-7.973c-0.521-0.516-1.363-0.509-1.879 0.013s-0.51 1.363 0.013 1.879l5.774 5.698h-15.473c-0.735 0-1.329 0.594-1.329 1.329s0.594 1.329 1.329 1.329h15.473l-5.774 5.698c-0.523 0.516-0.527 1.357-0.013 1.879 0.26 0.263 0.603 0.396 0.946 0.396 0.338 0 0.675-0.128 0.933-0.383l8.080-7.973c0.252-0.25 0.396-0.59 0.396-0.946s-0.142-0.695-0.396-0.946z",
                                                                }),
                                                            ],
                                                        }),
                                                    }),
                                                ],
                                            }),
                                        }) :
                                        Object(I.jsx)(I.Fragment, {
                                            children: Object(I.jsx)("div", {
                                                className: "btn-connnect",
                                                onClick: function() {
                                                    return s();
                                                },
                                                onDoubleClick: function() {
                                                    return c();
                                                },
                                                children: "Connect",
                                            }),
                                        }),
                                    ],
                                }),
                            }),
                        ],
                    });
                },
                H = function(e) {
                    var t = e.handleClose,
                        n = Object(a.useRef)(null),
                        s = Object(a.useRef)(null),
                        i =
                        (Object(a.useContext)(W).activeNetwork,
                            function(e) {
                                s.current && !n.current.contains(e.target) && t();
                            });
                    return (
                        Object(a.useEffect)(function() {
                            return (
                                document.addEventListener("mousedown", i),
                                function() {
                                    document.removeEventListener("mousedown", i);
                                }
                            );
                        }),
                        Object(I.jsx)(I.Fragment, {
                            children: Object(I.jsx)("div", {
                                className: "modalContainer",
                                ref: s,
                                children: Object(I.jsx)("div", {
                                    className: "reinvest-modal",
                                    ref: n,
                                    children: Object(I.jsxs)("main", {
                                        className: "modal_content promotion-content bonus container d-flex flex-column align-items-center gap-3",
                                        children: [
                                            Object(I.jsx)("a", {
                                                className: "contract-modal-link cake-back",
                                                href: "https://bscscan.com/address/0xe80c6273bb168b180ec39a9d76d4152db52e25e6",
                                                target: "_blank",
                                                children: "BNB Contract",
                                            }),
                                            Object(I.jsx)("a", {
                                                className: "contract-modal-link cake-back",
                                                href: "https://bscscan.com/address/0x77a55aa000addb9b6b82c9d57ac20480668bec12",
                                                target: "_blank",
                                                children: "DUSD Contract",
                                            }),
                                        ],
                                    }),
                                }),
                            }),
                        })
                    );
                },
                Y = n(78),
                z = n.n(Y),
                V = function(e) {
                    var t = e.dollar,
                        n = void 0 === t ? "$ 1,178,820" : t,
                        a = e.title,
                        s = void 0 === a ? "Total Value Deposit" : a,
                        i = e.value,
                        r = void 0 === i ? "1998.81500 BNB" : i,
                        c = e.unit,
                        o = void 0 === c ? "" : c;
                    return Object(I.jsx)("div", {
                        className: z.a.statsticItem,
                        children: Object(I.jsxs)("div", {
                            className: z.a.content,
                            children: [
                                Object(I.jsxs)("div", {
                                    className: z.a.data,
                                    children: [
                                        Object(I.jsxs)("p", {
                                            className: z.a.value,
                                            children: [r, " ", o],
                                        }),
                                        Object(I.jsxs)("p", {
                                            className: z.a.dollar,
                                            children: ["$", n],
                                        }),
                                    ],
                                }),
                                Object(I.jsx)("p", { className: z.a.title, children: s }),
                            ],
                        }),
                    });
                },
                X = function() {
                    var e = Object(a.useContext)(W),
                        t = (e.handleChangeNetwork, e.activeNetwork),
                        n = e.totalDeposit,
                        s = e.totalRefEarn,
                        i = e.usdPrice,
                        r = e.insuranceBalance;
                    return Object(I.jsxs)("section", {
                        className: "welcome-section",
                        id: "welcome",
                        children: [
                            Object(I.jsx)("div", {
                                className: "welcome-inner",
                                children: Object(I.jsx)("div", {
                                    className: "container w-100 h-100 pt-5",
                                    children: Object(I.jsxs)("div", {
                                        className: "welcome-content-holder d-flex justify-content-between align-items-center flex-wrap w-100 gap-5",
                                        children: [
                                            Object(I.jsxs)("div", {
                                                className: "welcome-left  d-flex justify-content-center align-items-start flex-column gap-3",
                                                children: [
                                                    Object(I.jsx)("h1", {
                                                        className: "welcome-head",
                                                        children: "DUSD MINER",
                                                    }),
                                                    Object(I.jsx)("h3", {
                                                        className: "welcome-text up",
                                                        children: "Stake your BNB or DUSD token & Earn Daily 9% for 30 days. Stable & Profitable Yield Farming Dapp With Automated Users Insurance",
                                                    }),
                                                    Object(I.jsx)("div", {
                                                        className: "d-flex flex-column gap-2 welcome-holders-bottom",
                                                        children: Object(I.jsx)("div", {
                                                            className: "welcome-btns-holder",
                                                            children: Object(I.jsx)("a", {
                                                                href: "#stake",
                                                                className: "welcome-paper-button",
                                                                children: "Deposit",
                                                            }),
                                                        }),
                                                    }),
                                                ],
                                            }),
                                            Object(I.jsx)("div", {
                                                className: "welcome-right",
                                                children: Object(I.jsxs)("div", {
                                                    className: "d-flex wrap flex-column gap-3",
                                                    children: [
                                                        Object(I.jsx)(V, {
                                                            title: "Total Deposit",
                                                            value: C(n[t.title], 2),
                                                            dollar: C(n[t.title] * i, 2),
                                                            unit: t.unit,
                                                        }),
                                                        Object(I.jsx)(V, {
                                                            title: "Total Deposit",
                                                            value: C(n[t.title], 2),
                                                            dollar: C(n[t.title] * i, 2),
                                                            unit: t.unit,
                                                        }),
                                                        Object(I.jsx)(V, {
                                                            title: "Total Referral",
                                                            value: C(s[t.title], 2),
                                                            dollar: C(s[t.title] * i, 2),
                                                            unit: t.unit,
                                                        }),
                                                        Object(I.jsx)(V, {
                                                            title: "Insurance Balance",
                                                            value: C(r[t.title], 2),
                                                            dollar: C(r[t.title] * i, 2),
                                                            unit: t.unit,
                                                        }),
                                                    ],
                                                }),
                                            }),
                                        ],
                                    }),
                                }),
                            }),
                            Object(I.jsx)("span", {
                                className: "go-down-holder",
                                children: Object(I.jsx)("a", {
                                    href: "#stake",
                                    children: Object(I.jsx)("img", {
                                        src: "img/go-down.svg",
                                        className: "go-down",
                                    }),
                                }),
                            }),
                        ],
                    });
                },
                G = n(199),
                K = n.n(G),
                Q =
                (n.p,
                    function() {
                        var e = Object(a.useContext)(W),
                            t = e.activeNetwork,
                            n = e.refEarned,
                            s = e.totalrefCount,
                            i = e.account,
                            r = e.userTotalDeposit;
                        return Object(I.jsxs)("div", {
                            className: "affiliate-box p-3 poo",
                            children: [
                                Object(I.jsx)("h1", {
                                    className: "statistic-head ms-3 mt-1",
                                    children: "YOUR REFERRAL LINK",
                                }),
                                Object(I.jsxs)("div", {
                                    className: "row justify-content-between flex-wrap ref-row m-3  mt-0",
                                    children: [
                                        Object(I.jsxs)("div", {
                                            className: "ref-holder mt-3 col-xl-6",
                                            children: [
                                                i > 0 && r > 0 ?
                                                Object(I.jsx)(I.Fragment, {
                                                    children: Object(I.jsxs)("div", {
                                                        className: "d-flex justify-content-between person-inner-box",
                                                        children: [
                                                            Object(I.jsx)("p", {
                                                                className: "ref-text",
                                                                children: "https://"
                                                                    .concat(window.location.host, "/?ref=")
                                                                    .concat(i),
                                                            }),
                                                            Object(I.jsx)(K.a, {
                                                                text: "https://"
                                                                    .concat(window.location.host, "/?ref=")
                                                                    .concat(i),
                                                                onCopy: function() {
                                                                    S.b.success(
                                                                        "personal link Copied Successfully"
                                                                    );
                                                                },
                                                                children: Object(I.jsx)("button", {
                                                                    className: "copy-btn",
                                                                    children: "COPY",
                                                                }),
                                                            }),
                                                        ],
                                                    }),
                                                }) :
                                                Object(I.jsx)(I.Fragment, {
                                                    children: Object(I.jsxs)("div", {
                                                        className: "d-flex justify-content-between person-inner-box",
                                                        children: [
                                                            Object(I.jsx)("p", {
                                                                className: "ref-text",
                                                                children: "You will get your ref link after investing",
                                                            }),
                                                            Object(I.jsx)(K.a, {
                                                                text: "https://".concat(
                                                                    window.location.host
                                                                ),
                                                                onCopy: function() {
                                                                    S.b.success(
                                                                        "personal link Copied Successfully"
                                                                    );
                                                                },
                                                                children: Object(I.jsx)("button", {
                                                                    className: "copy-btn",
                                                                    children: "COPY",
                                                                }),
                                                            }),
                                                        ],
                                                    }),
                                                }),
                                                Object(I.jsxs)("div", {
                                                    className: "ref-bottominfo-holder d-flex flex-column",
                                                    children: [
                                                        Object(I.jsxs)("span", {
                                                            className: "ref-bottom-info d-flex justify-content-between w-100",
                                                            children: [
                                                                Object(I.jsx)("p", {
                                                                    className: "left",
                                                                    children: "Total Referral Earned",
                                                                }),
                                                                Object(I.jsx)("p", {
                                                                    className: "right",
                                                                    children: C(n, 4),
                                                                }),
                                                            ],
                                                        }),
                                                        Object(I.jsxs)("span", {
                                                            className: "ref-bottom-info d-flex justify-content-between w-100",
                                                            children: [
                                                                Object(I.jsx)("p", {
                                                                    className: "left",
                                                                    children: "Total Referrals",
                                                                }),
                                                                Object(I.jsx)("p", {
                                                                    className: "right",
                                                                    children: C(s, 0),
                                                                }),
                                                            ],
                                                        }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                        Object(I.jsxs)("div", {
                                            className: "mt-4 ref-right-holder col-xl-5",
                                            children: [
                                                Object(I.jsxs)("p", {
                                                    className: "ref-extra-text bold mb-4",
                                                    children: [
                                                        "Earn ",
                                                        t.title,
                                                        " by inviting people to BNBRIDE",
                                                    ],
                                                }),
                                                Object(I.jsx)("p", {
                                                    className: "ref-extra-text bold",
                                                    children: "You will receive:",
                                                }),
                                                Object(I.jsx)("p", {
                                                    className: "ref-extra-text",
                                                    children: "12% from each level 1 referral deposits",
                                                }),
                                                Object(I.jsx)("p", {
                                                    className: "ref-extra-text bold mb-4",
                                                    children: "Deposit atleast once to activate Referral Rewards",
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            ],
                        });
                    }),
                J = function() {
                    var e = Object(a.useContext)(W),
                        t = e.activeNetwork,
                        n = e.userInvitedInfo,
                        s = e.userTotalDeposits,
                        i = e.account;
                    return Object(I.jsx)("section", {
                        className: "affiliate-section",
                        id: "affiliate",
                        children: Object(I.jsx)("div", {
                            className: "container",
                            children: Object(I.jsx)(Q, {
                                activeNet: t,
                                userInvitedInfo: n,
                                userTotalDeposits: s,
                                account: i,
                            }),
                        }),
                    });
                },
                q = function(e) {
                    var t = e.activeNet,
                        n = e.deposit;
                    return Object(I.jsxs)("div", {
                        className: "deposit-item d-flex gap-2 justify-content-between align-items-center p-3",
                        children: [
                            Object(I.jsxs)("p", {
                                className: "history-text deposit m-0",
                                children: [
                                    "PLAN: ",
                                    Object(I.jsxs)("span", {
                                        className: "count",
                                        children: [n.plan, " Days"],
                                    }),
                                ],
                            }),
                            Object(I.jsxs)("span", {
                                className: "history-text deposit",
                                children: [
                                    "TxHash:",
                                    Object(I.jsx)("span", {
                                        children: Object(I.jsxs)("a", {
                                            className: "hash me-2",
                                            target: "_blank",
                                            href: n.txUrl,
                                            children: ["\xa0 ", n.txHash],
                                        }),
                                    }),
                                ],
                            }),
                            Object(I.jsxs)("span", {
                                className: "history-text deposit",
                                children: [
                                    "Wallet: ",
                                    Object(I.jsx)("span", { children: n.user }),
                                ],
                            }),
                            Object(I.jsxs)("span", {
                                className: "history-text deposit",
                                children: [
                                    "Amount: ",
                                    Object(I.jsxs)("span", { children: [n.amount, " ", t.unit] }),
                                    " ",
                                ],
                            }),
                            Object(I.jsxs)("span", {
                                className: "history-time",
                                children: [n.time[0], " - ", n.time[1]],
                            }),
                        ],
                    });
                },
                $ = function() {
                    var e = Object(a.useContext)(W),
                        t = (e.handleChangeNetwork, e.activeNetwork),
                        n = (e.totalDeposit, e.totalRefEarn, e.usdPrice, e.lastDeposits);
                    e.harvestValue,
                        e.userCheckPoint,
                        e.withdrawPending,
                        e.changeUserCheckPoint,
                        e.handleWithdraw,
                        e.historyTotalInfo,
                        e.userTransactions;
                    return Object(I.jsx)("section", {
                        className: "w-100",
                        children: Object(I.jsx)("div", {
                            className: "container",
                            children: Object(I.jsxs)("div", {
                                className: "last-deposits-outer p-3",
                                children: [
                                    Object(I.jsx)("h1", {
                                        className: "statistic-head ms-2 mt-1 mb-4",
                                        children: "Last Deposit",
                                    }),
                                    Object(I.jsx)("div", {
                                        className: "last-deposit-inner d-flex flex-column gap-2",
                                        children: n ?
                                            n.map(function(e, n) {
                                                return Object(I.jsx)(
                                                    q, { deposit: e, activeNet: t },
                                                    n
                                                );
                                            }) : null,
                                    }),
                                ],
                            }),
                        }),
                    });
                },
                Z = function(e) {
                    var t = e.handleOpenModal,
                        n = Object(a.useState)(),
                        s = Object(r.a)(n, 2),
                        i = s[0],
                        c = s[1];
                    Object(a.useEffect)(function() {
                        o();
                    }, []);
                    var o = (function() {
                        var e = Object(l.a)(
                            p.a.mark(function e() {
                                var t;
                                return p.a.wrap(function(e) {
                                    for (;;)
                                        switch ((e.prev = e.next)) {
                                            case 0:
                                                return (e.next = 2), w.a.get("/config.json");
                                            case 2:
                                                (t = e.sent), c(t.data.urls);
                                            case 4:
                                            case "end":
                                                return e.stop();
                                        }
                                }, e);
                            })
                        );
                        return function() {
                            return e.apply(this, arguments);
                        };
                    })();
                    return Object(I.jsxs)("footer", {
                        children: [
                            Object(I.jsxs)("div", {
                                className: "footer-top d-flex flex-wrap align-items-center justify-content-center gap-5 p-4",
                                children: [
                                    Object(I.jsx)("a", {
                                        target: "_blank",
                                        href: "#",
                                        children: Object(I.jsx)("img", {
                                            src: "img/telegram.png",
                                            alt: "telegram",
                                            className: "footer-bottom-img social",
                                        }),
                                    }),
                                    Object(I.jsx)("a", {
                                        target: "_blank",
                                        href: "#",
                                        children: Object(I.jsx)("img", {
                                            src: "img/dappradar.png",
                                            alt: "dapp radar",
                                            className: "footer-bottom-img radar",
                                        }),
                                    }),
                                    Object(I.jsx)("button", {
                                        className: "footer-bsc",
                                        target: "_blank",
                                        href: "#",
                                        onClick: function() {
                                            return t();
                                        },
                                        children: Object(I.jsx)("img", {
                                            src: "img/bscscan.png",
                                            alt: "BNB",
                                            className: "footer-bottom-img bsc",
                                        }),
                                    }),
                                    Object(I.jsx)("a", {
                                        target: "_blank",
                                        href: "#",
                                        children: Object(I.jsx)("img", {
                                            src: "img/haze.png",
                                            alt: "haze crypto",
                                            className: "footer-bottom-img haze",
                                        }),
                                    }),
                                    Object(I.jsx)("a", {
                                        target: "_blank",
                                        href: "https://dusd.network/",
                                        children: Object(I.jsx)("img", {
                                            src: "img/Logo_beliy.png.webp",
                                            alt: "haze crypto",
                                            className: "footer-bottom-img haze",
                                        }),
                                    }),
                                    Object(I.jsx)("a", {
                                        target: "_blank",
                                        href: "https://pancakeswap.finance/swap?outputCurrency=0x5eba288f8833071ba7cd5c2b356754811c0ce8fb",
                                        children: Object(I.jsx)("img", {
                                            src: "img/pancake-768x227.png.webp",
                                            alt: "haze crypto",
                                            className: "footer-bottom-img haze",
                                        }),
                                    }),
                                    Object(I.jsx)("a", {
                                        target: "_blank",
                                        href: "https://poocoin.app/tokens/0x5eba288f8833071ba7cd5c2b356754811c0ce8fb",
                                        children: Object(I.jsx)("img", {
                                            src: "img/PoO0O.png.webp",
                                            alt: "haze crypto",
                                            className: "footer-bottom-img haze",
                                        }),
                                    }),
                                ],
                            }),
                            Object(I.jsx)("div", {
                                className: "footer-bottom p-2",
                                children: Object(I.jsx)("p", {
                                    children: "\xa9 2022 DUSDMINER. All rights reserved",
                                }),
                            }),
                        ],
                    });
                },
                ee = n(139),
                te = n.p + "static/media/black-spin.0f24faa9.svg",
                ne = function() {
                    var e = Object(a.useState)(""),
                        t = Object(r.a)(e, 2),
                        n = (t[0], t[1]),
                        s = Object(a.useContext)(W),
                        i =
                        (s.mintMyStake,
                            s.userDividend,
                            s.userDividendWithdraw,
                            s.dividendClaim),
                        c = s.dividendClaimPending,
                        o = s.userTotalDeposit,
                        u = s.userTotalWithdrawn,
                        l = (s.historyTotalInfo, s.harvestValue),
                        d = s.activeNetwork,
                        p = s.bonus,
                        b = (s.finishDate, s.changeUserCheckPoint),
                        m = s.userCheckPoint;
                    return Object(I.jsx)("section", {
                        className: "action-section w-100 mt-0",
                        id: "dashboard",
                        children: Object(I.jsx)("div", {
                            className: "container",
                            children: Object(I.jsx)("div", {
                                className: "action-holder d-flex flex-wrap justify-content-between gap-3",
                                children: Object(I.jsxs)("div", {
                                    className: "action-box w-100 mb-3 h-100",
                                    children: [
                                        Object(I.jsx)("h1", {
                                            className: "statistic-head ms-2 mt-1",
                                            children: "Dashboard",
                                        }),
                                        Object(I.jsxs)("div", {
                                            className: "d-flex flex-column gap-4 my-2 bottom-action-holder",
                                            children: [
                                                Object(I.jsxs)("div", {
                                                    className: "d-flex flex-responsive-item justify-content-between mx-2 text-start",
                                                    children: [
                                                        Object(I.jsxs)("div", {
                                                            children: [
                                                                Object(I.jsx)("p", {
                                                                    className: "action-minted-text bnb-reward text-start",
                                                                    children: "Total Deposit",
                                                                }),
                                                                Object(I.jsxs)("p", {
                                                                    className: "action-minted-value reward",
                                                                    children: [C(o, d.zeroCount), " ", d.unit],
                                                                }),
                                                            ],
                                                        }),
                                                        Object(I.jsxs)("div", {
                                                            children: [
                                                                Object(I.jsx)("p", {
                                                                    className: "action-minted-text bnb-reward text-end",
                                                                    children: "Total Withdraw",
                                                                }),
                                                                Object(I.jsxs)("p", {
                                                                    className: "action-minted-value reward text-end",
                                                                    children: [C(u, d.zeroCount), " ", d.unit],
                                                                }),
                                                            ],
                                                        }),
                                                    ],
                                                }),
                                                Object(I.jsxs)("div", {
                                                    className: "d-flex flex-column gap-4 flex-responsive-item justify-content-between mx-2",
                                                    children: [
                                                        Object(I.jsxs)("div", {
                                                            className: "mt-auto bonus-holder",
                                                            children: [
                                                                Object(I.jsx)("p", {
                                                                    className: "action-minted-text bnb-reward  text-start",
                                                                    children: "Bonus",
                                                                }),
                                                                Object(I.jsxs)("p", {
                                                                    className: "action-minted-value reward  text-start",
                                                                    children: [C(p, 4), " ", d.unit],
                                                                }),
                                                            ],
                                                        }),
                                                        Object(I.jsxs)("div", {
                                                            children: [
                                                                Object(I.jsx)("p", {
                                                                    className: "action-minted-text bnb-reward  text-start",
                                                                    children: "Available to withdraw",
                                                                }),
                                                                Object(I.jsxs)("p", {
                                                                    className: "action-minted-value reward  text-start",
                                                                    children: [
                                                                        C(l[d.title], d.zeroCount),
                                                                        " ",
                                                                        d.unit,
                                                                    ],
                                                                }),
                                                            ],
                                                        }),
                                                    ],
                                                }),
                                                Object(I.jsx)("div", {
                                                    className: "d-flex flex-responsive-item flex-column gap-3 bottom-inner-action-holder",
                                                    children: Object(I.jsx)("button", {
                                                        className: "action-claim-btn bnb-reward mt-4",
                                                        disabled: !!(c || m > +new Date()) || "",
                                                        onClick: function() {
                                                            return i();
                                                        },
                                                        children: m > +new Date() ?
                                                            Object(I.jsx)(ee.a, {
                                                                date: m,
                                                                renderer: function(e) {
                                                                    e.days;
                                                                    var t = e.hours,
                                                                        a = e.minutes,
                                                                        s = e.seconds;
                                                                    return e.completed ?
                                                                        (n(!1), b(0), "") :
                                                                        (n(!0),
                                                                            Object(I.jsxs)("p", {
                                                                                className: "count-text",
                                                                                children: [
                                                                                    String(t).padStart(2, "0"),
                                                                                    " : ",
                                                                                    String(a).padStart(2, "0"),
                                                                                    " ",
                                                                                    ": ",
                                                                                    String(s).padStart(2, "0"),
                                                                                ],
                                                                            }));
                                                                },
                                                            }) : c ?
                                                            Object(I.jsx)(I.Fragment, {
                                                                children: Object(I.jsx)("img", {
                                                                    src: te,
                                                                    className: "spinner",
                                                                }),
                                                            }) : Object(I.jsx)(I.Fragment, {
                                                                children: "Claim",
                                                            }),
                                                    }),
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            }),
                        }),
                    });
                },
                ae = function(e) {
                    var t = e.activeNet,
                        n = e.deposit;
                    return Object(I.jsxs)("div", {
                        className: "deposit-item d-flex justify-content-between align-items-center p-3",
                        children: [
                            Object(I.jsxs)("p", {
                                className: "history-text deposit m-0",
                                children: [
                                    "PLAN: ",
                                    Object(I.jsxs)("span", {
                                        className: "count",
                                        children: [n.plan, " Days"],
                                    }),
                                ],
                            }),
                            Object(I.jsxs)("span", {
                                className: "history-text deposit",
                                children: [
                                    "Status: ",
                                    Object(I.jsx)("span", { children: n.status }),
                                ],
                            }),
                            Object(I.jsxs)("span", {
                                className: "history-text deposit",
                                children: [
                                    "Amount: ",
                                    Object(I.jsxs)("span", { children: [n.amount, " ", t.unit] }),
                                    " ",
                                ],
                            }),
                            Object(I.jsx)("span", {
                                className: "history-time",
                                children: "".concat(n.time[0], " ").concat(n.time[1]),
                            }),
                        ],
                    });
                },
                se = function() {
                    var e = Object(a.useContext)(W),
                        t = (e.handleChangeNetwork, e.activeNetwork),
                        n =
                        (e.totalDeposit,
                            e.totalRefEarn,
                            e.usdPrice,
                            e.lastDeposits,
                            e.harvestValue,
                            e.userCheckPoint,
                            e.withdrawPending,
                            e.changeUserCheckPoint,
                            e.handleWithdraw,
                            e.historyTotalInfo,
                            e.userTransactions);
                    return Object(I.jsx)("section", {
                        className: "w-100",
                        children: Object(I.jsx)("div", {
                            className: "container",
                            children: Object(I.jsxs)("div", {
                                className: "last-deposits-outer last-user-deposits-outer  p-3",
                                children: [
                                    Object(I.jsx)("h1", {
                                        className: "statistic-head ms-2 mt-1 mb-4",
                                        children: "Your Deposits",
                                    }),
                                    Object(I.jsx)("div", {
                                        className: "last-deposit-inner last-user-deposit-inner d-flex flex-column gap-2",
                                        children: n ?
                                            n.map(function(e, n) {
                                                return Object(I.jsx)(
                                                    ae, { deposit: e, activeNet: t },
                                                    n
                                                );
                                            }) : null,
                                    }),
                                ],
                            }),
                        }),
                    });
                },
                ie = function() {
                    return Object(I.jsx)("div", {
                        className: "container",
                        children: Object(I.jsxs)("div", {
                            className: "box-holder",
                            children: [
                                Object(I.jsxs)("div", {
                                    className: "feature_box",
                                    children: [
                                        Object(I.jsxs)("p", {
                                            className: "feature_title",
                                            children: [
                                                Object(I.jsx)("img", {
                                                    src: "img/group.png",
                                                    className: "feature-img",
                                                }),
                                                "1-level referral program",
                                            ],
                                        }),
                                        Object(I.jsx)("p", {
                                            className: "feature_text",
                                            children: "Earn when people invited by you make deposits.",
                                        }),
                                    ],
                                }),
                                Object(I.jsxs)("div", {
                                    className: "feature_box",
                                    children: [
                                        Object(I.jsxs)("p", {
                                            className: "feature_title",
                                            children: [
                                                Object(I.jsx)("img", {
                                                    src: "img/shield.png",
                                                    className: "feature-img",
                                                }),
                                                "Safe & Secure",
                                            ],
                                        }),
                                        Object(I.jsx)("p", {
                                            className: "feature_text",
                                            children: "Tested and verified by HazeCrypto: fair, stable and reliable Project you can trust to",
                                        }),
                                    ],
                                }),
                                Object(I.jsxs)("div", {
                                    className: "feature_box",
                                    children: [
                                        Object(I.jsxs)("p", {
                                            className: "feature_title",
                                            children: [
                                                Object(I.jsx)("img", {
                                                    src: "img/insurance.png",
                                                    className: "feature-img",
                                                }),
                                                "Automatic user insurance",
                                            ],
                                        }),
                                        Object(I.jsx)("p", {
                                            className: "feature_text",
                                            children: "A special standalone contract guards the Project against balance draining and keeps it alive",
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    });
                };
            var re = function() {
                var e = Object(a.useState)(!1),
                    t = Object(r.a)(e, 2),
                    n = t[0],
                    s = t[1],
                    i = Object(a.useContext)(W),
                    c = i.activeNetwork,
                    o = i.reinvestModal,
                    u = i.networkOpen;
                return (
                    Object(a.useEffect)(function() {
                        if (window.location.href.includes("?ref=")) {
                            var e = window.location.href.split("?ref=")[1];
                            localStorage.setItem("baseRef", e);
                        } else localStorage.getItem("baseRef") || localStorage.setItem("baseRef", h);
                    }, []),
                    Object(a.useEffect)(function() {
                        localStorage.getItem("version") === x ||
                            (localStorage.clear(),
                                sessionStorage.clear(),
                                localStorage.setItem("version", x));
                    }, []),
                    Object(I.jsxs)("div", {
                        className: "inner-root "
                            .concat(c.backStyle, " ")
                            .concat(o ? "modal" : ""),
                        children: [
                            Object(I.jsx)("div", {
                                className: "count-holder",
                                style: { backgroundColor: "#fff" },
                                children: new Date().getTime() < 1652526e6 &&
                                    Object(I.jsx)("div", {
                                        className: "",
                                        children: Object(I.jsx)("b", {
                                            children: Object(I.jsx)(ee.a, {
                                                date: 1652526e6,
                                                renderer: function(e) {
                                                    var t = e.days,
                                                        n = e.hours,
                                                        a = e.minutes,
                                                        s = e.seconds;
                                                    return e.completed ?
                                                        "" :
                                                        Object(I.jsxs)("div", {
                                                            className: "text-center p-4",
                                                            children: [
                                                                " ",
                                                                Object(I.jsx)("p", {
                                                                    className: "text-center font-size19",
                                                                    children: "Launch date is Saturday 14th May 2022 at 11am UTC",
                                                                }),
                                                                Object(I.jsxs)("p", {
                                                                    className: "timer text-center font-size40 last-count",
                                                                    children: [
                                                                        Object(I.jsx)("span", {
                                                                            className: "days",
                                                                            children: String(t).padStart(2, "0"),
                                                                        }),
                                                                        " :",
                                                                        " ",
                                                                        Object(I.jsx)("span", {
                                                                            className: "hours",
                                                                            children: String(n).padStart(2, "0"),
                                                                        }),
                                                                        ":",
                                                                        " ",
                                                                        Object(I.jsx)("span", {
                                                                            className: "minutes",
                                                                            children: String(a).padStart(2, "0"),
                                                                        }),
                                                                        " ",
                                                                        ": ",
                                                                        Object(I.jsx)("span", {
                                                                            className: "second",
                                                                            children: String(s).padStart(2, "0"),
                                                                        }),
                                                                    ],
                                                                }),
                                                            ],
                                                        });
                                                },
                                            }),
                                        }),
                                    }),
                            }),
                            Object(I.jsx)(S.a, { position: "bottom-right" }),
                            Object(I.jsxs)("div", {
                                className: "container grid bnb",
                                children: [
                                    Object(I.jsx)("img", {
                                        src: "img/welcome-shp.svg",
                                        className: "welc-shape",
                                    }),
                                    Object(I.jsx)(L, {
                                        handleOpenModal: function() {
                                            return s(!0);
                                        },
                                    }),
                                    Object(I.jsx)(X, {}),
                                    Object(I.jsxs)("div", {
                                        className: "d-flex flex-small-device gap-1",
                                        children: [
                                            Object(I.jsx)(_, {}),
                                            Object(I.jsx)(ne, {}),
                                            Object(I.jsx)(se, {}),
                                        ],
                                    }),
                                    Object(I.jsxs)("div", {
                                        className: "d-flex flex-small-device gap-1",
                                        children: [Object(I.jsx)(J, {}), Object(I.jsx)($, {})],
                                    }),
                                ],
                            }),
                            Object(I.jsx)(ie, {}),
                            Object(I.jsx)(Z, {
                                handleOpenModal: function() {
                                    return s(!0);
                                },
                            }),
                            n &&
                            Object(I.jsx)(H, {
                                handleClose: function() {
                                    return s(!1);
                                },
                            }),
                            u && Object(I.jsx)(P, {}),
                        ],
                    })
                );
            };
            i.a.render(
                Object(I.jsx)(U, { children: Object(I.jsx)(re, {}) }),
                document.getElementById("root")
            );
        },
    },
    [
        [828, 1, 2]
    ],
]);
//# sourceMappingURL=main.2bc6e9bd.chunk.js.map