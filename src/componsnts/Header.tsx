import { Button } from "./ui/Button";
import { Container } from "./ui/Container";

export const Header = () => {
  return (
    <>
      <header className="bg-background text-white relative z-20">
        <Container className="flex items-center min-h-[--header-row-height]">
          <a
            href="/"
            className="h-11 w-11 flex items-center px-6 -ml-6 text-xl"
          >
            🍏 <span className="sr-only">Back to Home page</span>
          </a>
        </Container>
      </header>
      <div className="sticky top-0 bg-backgroundContrast text-white z-20">
        <Container className="flex items-center min-h-[--header-row-height] justify-between">
          <p className="text-xl font-semibold">Apple TV+</p>
          <Button size="small">Stream now</Button>
        </Container>
      </div>
    </>
  );
};
