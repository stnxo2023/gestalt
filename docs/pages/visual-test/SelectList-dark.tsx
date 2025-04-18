import { Box, ColorSchemeProvider, DesignTokensProvider, SelectList } from 'gestalt';

export default function Screenshot() {
  return (
    <ColorSchemeProvider colorScheme="dark">
      <DesignTokensProvider>
        <Box color="default" display="inlineBlock" padding={1}>
          <SelectList id="selectlistexample11" label="Country" onChange={() => {}} size="md">
            {[
              { label: 'Algeria', value: 'algeria' },
              { label: 'Belgium', value: 'belgium' },
              { label: 'Canada', value: 'canada' },
              { label: 'Denmark', value: 'denmark' },
              { label: 'Egypt', value: 'egypt' },
              { label: 'France', value: 'france' },
            ].map(({ label, value }) => (
              <SelectList.Option key={label} label={label} value={value} />
            ))}
          </SelectList>{' '}
        </Box>
      </DesignTokensProvider>
    </ColorSchemeProvider>
  );
}
