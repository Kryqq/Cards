import * as Tabs from '@radix-ui/react-tabs';
import s from './Tabs.module.scss';

type Props = {
   disabled?: boolean;
};

export const Tab = ({ disabled = false }: Props) => (
   <Tabs.Root className={s.root} defaultValue="tab1" orientation="vertical">
      <Tabs.Content value="tab1">Tab one content</Tabs.Content>
      <Tabs.Content value="tab2">Tab two content</Tabs.Content>
      <Tabs.Content value="tab3">Tab three content</Tabs.Content>
      <Tabs.Content value="tab4">Tab four content</Tabs.Content>

      <Tabs.List className={s.tabs__container} aria-label="tabs example">
         <Tabs.Trigger className={s.tab} disabled={disabled} value="tab1">
            One
         </Tabs.Trigger>
         <Tabs.Trigger className={s.tab} disabled={disabled} value="tab2">
            Two
         </Tabs.Trigger>
         <Tabs.Trigger className={s.tab} disabled={disabled} value="tab3">
            three
         </Tabs.Trigger>
         <Tabs.Trigger className={s.tab} disabled={disabled} value="tab4">
            four
         </Tabs.Trigger>
      </Tabs.List>
   </Tabs.Root>
);
