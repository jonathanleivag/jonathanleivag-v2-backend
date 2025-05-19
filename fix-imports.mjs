import fs from 'fs/promises'
import path from 'path'

const directory = './src'

async function fixImports(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true })

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name)

    if (entry.isDirectory()) {
      await fixImports(fullPath)
    } else if (entry.isFile() && fullPath.endsWith('.ts')) {
      let content = await fs.readFile(fullPath, 'utf-8')

      const updatedContent = content.replace(
        /from\s+['"](\.[^'"]+?)['"]/g,
        (match, p1) => {
          if (p1.endsWith('.js') || p1.endsWith('.ts')) return match
          return `from '${p1}.js'`
        }
      )

      if (updatedContent !== content) {
        await fs.writeFile(fullPath, updatedContent, 'utf-8')
        console.log(`🔧 Updated imports in: ${fullPath}`)
      }
    }
  }
}

await fixImports(directory)
console.log('✅ Import paths updated with .js extension.')
