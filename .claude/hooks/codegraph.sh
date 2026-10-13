#!/usr/bin/env bash
# Arma (o pone al día) el índice de CodeGraph al empezar cada sesión de Claude
# Code. El índice vive en .codegraph/, no se commitea y se rehace en cada clon.
# La versión es la misma de .mcp.json: si se sube una, se sube la otra.
cd "${CLAUDE_PROJECT_DIR:-$(dirname "$0")/../..}" || exit 0
export CODEGRAPH_TELEMETRY=0
if [ -f .codegraph/codegraph.db ]; then
  npx -y @colbymchenry/codegraph@1.6.2 sync >/dev/null 2>&1
else
  npx -y @colbymchenry/codegraph@1.6.2 init -y >/dev/null 2>&1
fi
# Si falla (sin red, por ejemplo), la sesión sigue: sin índice, CodeGraph le
# dice al agente que use las herramientas de siempre.
exit 0
