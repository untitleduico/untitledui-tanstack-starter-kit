import type { PropsWithChildren } from "react";
import { useRouter } from "@tanstack/react-router";
import { RouterProvider } from "react-aria-components";

/**
 * Hands React Aria the router's navigate function so that components rendering
 * links (Button with href, Breadcrumbs, Tabs, …) navigate client-side instead of
 * triggering a full page load.
 */
export const RouteProvider = ({ children }: PropsWithChildren) => {
    const router = useRouter();

    // TanStack types `to` against the generated route tree; React Aria only ever
    // hands us a plain href, so the cast is unavoidable here.
    return <RouterProvider navigate={(href) => void router.navigate({ to: href as never })}>{children}</RouterProvider>;
};
