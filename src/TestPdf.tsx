import { Document, Page, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  document: {
    fontFamily: 'Helvetica',
    fontSize: 10,
  },
  page: {
    flexDirection: 'column',
    padding: 50,
  },
  tableSection: {
    marginTop: 30,
    flexDirection: 'column',
    gap: 30,
  },
});

export const TestPdf = () => {
  return (
    <Document style={styles.document}>
      <Page size="LETTER" style={styles.page}></Page>
    </Document>
  );
};
