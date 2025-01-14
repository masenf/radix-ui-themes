import { accentColorPropDef, highContrastPropDef, radiusPropDef } from '../props/index.js';
import type { PropDef } from '../props/index.js';
import { asChildPropDef } from '../props/as-child.prop.js';

const sizes = ['1', '2', '3'] as const;
const variants = ['solid', 'soft', 'surface', 'outline'] as const;

const badgePropDefs = {
  ...asChildPropDef,
  size: { type: 'enum', className: 'rt-r-size', values: sizes, default: '1', responsive: true },
  variant: { type: 'enum', className: 'rt-variant', values: variants, default: 'soft' },
  ...accentColorPropDef,
  ...highContrastPropDef,
  ...radiusPropDef,
} satisfies {
  size: PropDef<(typeof sizes)[number]>;
  variant: PropDef<(typeof variants)[number]>;
};

export { badgePropDefs };
