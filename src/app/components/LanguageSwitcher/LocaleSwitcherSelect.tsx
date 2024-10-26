'use client';

import { useParams } from 'next/navigation';
import { ChangeEvent, ReactNode, useTransition } from 'react';
import { Locale, usePathname, useRouter } from '@/src/i18n/routing';

type Props = {
 children: ReactNode;
 defaultValue: string;
 label: string;
};

export default function LocaleSwitcherSelect({
 children,
 defaultValue,
 label
}: Props) {
 const router = useRouter();
 const [isPending, startTransition] = useTransition();
 const pathname = usePathname();
 const params = useParams();

 function onSelectChange(event: ChangeEvent<HTMLSelectElement>) {
  const nextLocale = event.target.value as Locale;
  startTransition(() => {
   router.replace(
    // @ts-expect-error -- TypeScript will validate that only known `params`
    // are used in combination with a given `pathname`. Since the two will
    // always match for the current route, we can skip runtime checks.
    { pathname, params },
    { locale: nextLocale }
   );
  });
 }

 return (
  <label
   className={isPending ? 'relative text-gray-600 transition-opacity [&:disabled]:opacity-30' : "relative "}
  >

   <select
    className="inline-flex appearance-none focus:outline-none bg-lightColor dark:bg-darkColor text-darkColor dark:text-lightColor py-2 px-2 cursor-pointer "
    defaultValue={defaultValue}
    disabled={isPending}
    onChange={onSelectChange}
   >
    {children}
   </select>
  </label>
 );
}