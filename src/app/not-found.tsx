import { Column, Heading, Text } from "@/once-ui/components";

export default function NotFound() {
  return (
    <Column as="section" fill center paddingBottom="160">
      <Text marginBottom="s" variant="display-strong-xl">
        404
      </Text>
      <Heading marginBottom="l" variant="display-default-xs">
        Página no encontrada
      </Heading>
      <Text onBackground="neutral-weak">La página que estás buscando no existe.</Text>
    </Column>
  );
}
