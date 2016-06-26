import {
  BoldPlugin,
  FontColorPlugin,
  FontHighlightColorPlugin,
  FontSizePlugin,
  // InsertImagePlugin,
  ItalicPlugin,
  JustifyCenterPlugin,
  JustifyLeftPlugin,
  JustifyRightPlugin,
  LinkPlugin,
  OrderedListPlugin,
  StrikethroughPlugin,
  SubscriptPlugin,
  SuperscriptPlugin,
  UnderlinePlugin,
  UnorderedListPlugin,
} from '../plugins';

export const FullPreset = [
  [
    BoldPlugin,
    ItalicPlugin,
    UnderlinePlugin,
    StrikethroughPlugin,
    '-',
    SubscriptPlugin,
    SuperscriptPlugin,
    '-',
    FontColorPlugin,
    FontHighlightColorPlugin,
    '-',
    FontSizePlugin,
    '-',
    UnorderedListPlugin,
    OrderedListPlugin,
    '-',
    JustifyLeftPlugin,
    JustifyCenterPlugin,
    JustifyRightPlugin,
    '-',
    LinkPlugin,
    // InsertImagePlugin,
  ],
];
