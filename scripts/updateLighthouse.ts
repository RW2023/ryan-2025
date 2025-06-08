import fs from 'fs';
import path from 'path';
import lighthouse from 'lighthouse';
import {launch} from 'chrome-launcher';

interface Scores {
  performance: number;
  accessibility: number;
  bestPractices: number;
  seo: number;
}

const url = 'https://www.ryan-w.dev/';

const getColor = (score: number): string => {
  if (score >= 90) return 'brightgreen';
  if (score >= 80) return 'green';
  if (score >= 70) return 'yellow';
  if (score >= 50) return 'orange';
  return 'red';
};

const badge = (label: string, score: number): string => {
  const color = getColor(score);
  const encodedLabel = encodeURIComponent(label);
  return `![${label}: ${score}](https://img.shields.io/badge/${encodedLabel}-${score}-${color})`;
};

const generateTable = (scores: Scores, date: string): string => `## Lighthouse Scores (Real-Time)
| Category | Score |
| -------- | ----- |
| Performance | ${badge('Performance', scores.performance)} |
| Accessibility | ${badge('Accessibility', scores.accessibility)} |
| Best Practices | ${badge('Best Practices', scores.bestPractices)} |
| SEO | ${badge('SEO', scores.seo)} |
_Last updated: ${date}_`;

async function run() {
  const chrome = await launch({chromeFlags: ['--headless']});
  const result = await lighthouse(url, {port: chrome.port});
  await chrome.kill();

  const scores: Scores = {
    performance: Math.round(result.lhr.categories.performance.score * 100),
    accessibility: Math.round(result.lhr.categories.accessibility.score * 100),
    bestPractices: Math.round(result.lhr.categories['best-practices'].score * 100),
    seo: Math.round(result.lhr.categories.seo.score * 100),
  };

  const date = new Date().toISOString().split('T')[0];
  updateReadme(scores, date);
  updateHistory(scores, date);
}

function updateReadme(scores: Scores, date: string) {
  const readmePath = path.join(__dirname, '..', 'README.md');
  const start = '<!-- LH_START -->';
  const end = '<!-- LH_END -->';
  let readme = fs.readFileSync(readmePath, 'utf8');
  const table = generateTable(scores, date);
  const section = `${start}\n${table}\n${end}`;
  const regex = new RegExp(`${start}[\n\r]+[\s\S]*?${end}`, 'm');
  if (regex.test(readme)) {
    readme = readme.replace(regex, section);
  } else {
    readme += `\n${section}\n`;
  }
  fs.writeFileSync(readmePath, readme);
}

function updateHistory(scores: Scores, date: string) {
  const historyPath = path.join(__dirname, '..', 'lighthouse-history.json');
  let history: Array<any> = [];
  if (fs.existsSync(historyPath)) {
    history = JSON.parse(fs.readFileSync(historyPath, 'utf8'));
  }
  history.push({date, ...scores});
  fs.writeFileSync(historyPath, JSON.stringify(history, null, 2) + '\n');
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
