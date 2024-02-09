---
title: 8.2 Sicherheitsscans
sidebar_position: 2
---

# Sicherheitsscans

Viele der Container-Bilder enthalten Sicherheitsprobleme. Wenn du Bilder aus öffentlichen Registries verwenden möchtest, solltest du in der Lage sein, sie zu scannen, um zu überprüfen, ob das Bild sauber ist.
Es gibt einige Tools auf dem Markt, die dir helfen können, diese Bilder zu überprüfen.
In diesem Lab wirst du lernen, wie man ein Bild mit dem Tool Trivy scannt.

## Trivy

Installiere Trivy auf deinem Computer, indem du die Anweisungen auf der [offiziellen Trivy-Website](https://trivy.dev/)
folgst.

Sobald Trivy installiert ist, kannst du ein Bild scannen, indem du den folgenden Befehl eingibst:

```bash
trivy image <image-name>
```

Das Ergebnis sollte ähnlich wie folgt aussehen:

```bash
2024-02-09T15:27:06.080+0100    INFO    Need to update DB
2024-02-09T15:27:06.080+0100    INFO    DB Repository: ghcr.io/aquasecurity/trivy-db
2024-02-09T15:27:06.080+0100    INFO    Downloading DB...
42.79 MiB / 42.79 MiB [----------------------------------------------------------------------------------------] 100.00% 18.23 MiB p/s 2.5s
2024-02-09T15:27:09.741+0100    INFO    Vulnerability scanning is enabled
2024-02-09T15:27:09.741+0100    INFO    Secret scanning is enabled
2024-02-09T15:27:09.741+0100    INFO    If your scanning is slow, please try '--scanners vuln' to disable secret scanning
2024-02-09T15:27:09.741+0100    INFO    Please see also https://aquasecurity.github.io/trivy/v0.49/docs/scanner/secret/#recommendation for faster secret detection
2024-02-09T15:27:11.293+0100    INFO    Detected OS: alpine
2024-02-09T15:27:11.293+0100    INFO    Detecting Alpine vulnerabilities...
2024-02-09T15:27:11.293+0100    INFO    Number of language-specific files: 0
2024-02-09T15:27:11.293+0100    WARN    This OS version is no longer supported by the distribution: alpine 3.10.9
2024-02-09T15:27:11.293+0100    WARN    The vulnerability detection may be insufficient because security updates are not provided

alpine:3.10 (alpine 3.10.9)

Total: 1 (UNKNOWN: 0, LOW: 0, MEDIUM: 0, HIGH: 0, CRITICAL: 1)

┌───────────┬────────────────┬──────────┬────────┬───────────────────┬───────────────┬──────────────────────────────────────────────────────────────┐
│  Library  │ Vulnerability  │ Severity │ Status │ Installed Version │ Fixed Version │                            Title                             │
├───────────┼────────────────┼──────────┼────────┼───────────────────┼───────────────┼──────────────────────────────────────────────────────────────┤
│ apk-tools │ CVE-2021-36159 │ CRITICAL │ fixed  │ 2.10.6-r0         │ 2.10.7-r0     │ libfetch: an out of boundary read while libfetch uses strtol │
│           │                │          │        │                   │               │ to parse...                                                  │
│           │                │          │        │                   │               │ https://avd.aquasec.com/nvd/cve-2021-36159                   │
└───────────┴────────────────┴──────────┴────────┴───────────────────┴───────────────┴──────────────────────────────────────────────────────────────┘
```
