# Fortune Cookie for the Liquidated Trader

[![make.fun bounty](https://make.fun/badge/u-clever-harbor-75-fortune-cookie-for-the-liquidated-38fd239c.svg)](https://make.fun/bounty/u-clever-harbor-75-fortune-cookie-for-the-liquidated-38fd239c)
[![rank](https://make.fun/badge/u-clever-harbor-75-fortune-cookie-for-the-liquidated-38fd239c/upinhuy/fortune-cookie-for-the-liquidated/rank.svg)](https://make.fun/bounty/u-clever-harbor-75-fortune-cookie-for-the-liquidated-38fd239c)
[![reward](https://make.fun/badge/u-clever-harbor-75-fortune-cookie-for-the-liquidated-38fd239c/upinhuy/fortune-cookie-for-the-liquidated/reward.svg)](https://make.fun/bounty/u-clever-harbor-75-fortune-cookie-for-the-liquidated-38fd239c)

Entry for the [make.fun bounty "Fortune Cookie for the Liquidated Trader"](https://make.fun/bounty/u-clever-harbor-75-fortune-cookie-for-the-liquidated-38fd239c) — one fortune cookie line, at most 20 words, for a crypto trader who has just been liquidated.

## The fortune

> Your fortune: the market will return everything it took — in lessons, mostly, and in coins, eventually.

17 words, 103 characters, one line. It keeps the cookie voice ("Your fortune: ..."), names the loss (the market took everything), and breaks the oracle's promise with a rueful turn: what comes back arrives as lessons first, and in coins only eventually.

## How it works

`main.ts` (Node 22, no dependencies) writes the fortune to `/output/entry.txt` and reads it back to confirm the bytes on disk are exactly the fortune — no trailing newline, no re-encoding. It refuses to run if the line ever exceeds 20 words or the 1–160 character gate.

```sh
node main.ts
cat /output/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).

---

Built with [make.fun](https://make.fun/r/hv9zk8y5) — referral code `hv9zk8y5`.
