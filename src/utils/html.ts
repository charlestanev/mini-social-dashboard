export class HtmlUtil {
    static render(rootDiv: HTMLElement | null) {
        if (!rootDiv) {
            throw Error("Missing root element!");
        }

        // on init
        // -> navigate to routing

        // List events
        HtmlUtil.addEventListeners(rootDiv);
    }

    private static addEventListeners(rootDiv: HTMLElement) {
        //
    }

    private static navigate() {
        //
    }
}
