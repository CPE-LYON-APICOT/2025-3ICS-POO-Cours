function remove_blockquotes(blocks)
  local inside_blockquote = false
  local result = {}

  for _, block in ipairs(blocks) do
    if block.t == "RawBlock" and block.text:match("<article>") then
      inside_blockquote = true
      table.insert(result, pandoc.RawBlock("html", "<blockquote>"))
      table.insert(result, "Réponse : ")
    end

    if not inside_blockquote then
      table.insert(result, block)
    end

    if inside_blockquote and block.t == "RawBlock" and block.text:match("</article>") then
      inside_blockquote = false
      table.insert(result, pandoc.RawBlock("html", "</blockquote>"))
    end
  end

  return result
end

-- Applying the filter to the Pandoc document
function Pandoc(doc)
  doc.blocks = remove_blockquotes(doc.blocks)
  return doc
end
