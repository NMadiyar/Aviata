import { mount } from "@cypress/vue";
import { createTestingPinia } from "@pinia/testing";

import Index from "./src/pages/Index";

describe("Index ", () => {
  it("Index first div ", () => {
    mount(Index, {
      global: {
        plugins: [
          createTestingPinia({
            createSpy: (args) => {
              console.log("spy", args);
              return () => {
                console.log("spyreturns");
              };
            },
          }),
        ],
      },
    });

    cy.get("div").should("be.visible");
  });
});
