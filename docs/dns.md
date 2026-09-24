# DNS runbook — brand.simplsolutions.io

Dated 24 Sep 2026. The record of truth for every simplsolutions.io record is the Notion database
**DNS Records — simplsolutions.io** (Teamspace Home → Inventory & Accounts). Changes are filed through
**DNS Change Requests** using its *Request a DNS change* form. This file covers only the brand site.

## Where the zone lives

`simplsolutions.io` is delegated to **Cloudflare** (`laura.ns.cloudflare.com`, `leonard.ns.cloudflare.com`,
as reported by the Vercel domains API on 24 Sep 2026). Records are edited in the Cloudflare dashboard, not at the
registrar and not in Vercel. Vercel's suggested nameservers (`ns1/ns2.vercel-dns.com`) should be ignored.

## Adding brand.simplsolutions.io

1. **Vercel:** in project `simpl-brand` (team Simpl Solutions), Settings → Domains → add `brand.simplsolutions.io`.
   Copy the exact CNAME target Vercel shows. It may be a per-project target, not `cname.vercel-dns.com`.
2. **Cloudflare:** simplsolutions.io → DNS → Records → Add record:
   - Type `CNAME`, Name `brand`, Target: the value from step 1
   - Proxy status **DNS only (grey cloud)**. Proxying in front of Vercel interferes with certificate issuance.
3. **Do not touch** MX, SPF, DKIM, DMARC or the `google-site-verification` TXT. Email depends on them.
4. **Verify with an external resolver.** The Vercel checkmark only means the domain is attached:

   ```bash
   dig +short NS simplsolutions.io @8.8.8.8
   dig +short brand.simplsolutions.io @8.8.8.8
   curl -sSI https://brand.simplsolutions.io
   ```

   Expect the two Cloudflare nameservers, a CNAME to the Vercel target, and `HTTP/2 200` over valid TLS.
5. Paste the output into the change request's *Resolver output*. Set the request to **Verified**, and set the
   `brand.simplsolutions.io` row in DNS Records to **Live — verified** with today's date in *Last verified*.

## Records not to create yet

`gateway.simplsolutions.io` stays **Held**. Production still serves the stock "AI Gateway Demo" template.
Create the record only after the gateway's env vars, Supabase schema and PR #26 are promoted.

## Why this is manual

No Cloudflare connector exists in the connector registry, and the Claude sandbox's network policy blocks
`api.cloudflare.com`, so Claude cannot read or edit the zone. Connectors run from Anthropic's side, not through
the sandbox. If a Cloudflare MCP server is added as a custom connector in claude.ai, zone reads and audits
against the Notion inventory can be automated.
