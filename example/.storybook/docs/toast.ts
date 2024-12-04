export const ToastDocs = `
# Toast Component
## Installation
1. Wrap your app with \`TennisiMDSWrapper\`. Toast wrapper included.
2. Import ToastService from \`@tennisi/utils\`.
3. Show your toast with ToastService like this:

## Usage

\`\`\`ts
import { ToastService } from '@tennisi/utils';

ToastService.success({text1: 'Toast title', text2: 'Toast subtitle'})

ToastService.warning({text1: 'Toast title', text2: 'Toast subtitle'})

ToastService.error({text1: 'Toast title', text2: 'Toast subtitle'})

ToastService.default({text1: 'Toast title', text2: 'Toast subtitle'})
\`\`\`
`;
