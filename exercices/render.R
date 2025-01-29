# Load necessary library
library(rmarkdown)

# Define the Lua filter path
lua_filter <- "filter.lua"
# Get the absolute path of the Lua filter
lua_filter <- file.path(getwd(), lua_filter)
# Check if the Lua filter exists
if (!file.exists(lua_filter)) {
  stop(paste("Lua filter file not found:", lua_filter))
}

# Create directories if they don't exist
if (!dir.exists("corriges")) {
  dir.create("corriges")
}
public_git_dir <- file.path("2025-3ICS-POO-Exercices")
if (!dir.exists(public_git_dir)) {
  stop("Directory not found: 2025-3ICS-POO-Exercices")
}
# List all .Rmd files recursively in the current folder and subfolders
rmd_files <- list.files(pattern = "\\.rmd$", recursive = TRUE)
print(rmd_files)

# Render each .Rmd file to both PDF and Markdown formats
for (file in rmd_files) {
  # Render to PDF in the 'corriges' folder
  output_pdf_dir <- file.path("corriges", dirname(file))
  if (!dir.exists(output_pdf_dir)) {
    dir.create(output_pdf_dir, recursive = TRUE)
  }
  try({
    render(file,
      output_format = pdf_document(),
      output_dir = output_pdf_dir
    )
    cat("Rendered to PDF:", file, "\n")
  })
  output_md_dir <- file.path(public_git_dir, dirname(file))
  if (!dir.exists(output_md_dir)) {
    dir.create(output_md_dir, recursive = TRUE)
  }
  # Render to Markdown in the 'work' folder with Lua filter
  try({
    render(file,
      output_format = md_document(pandoc_args = c("--lua-filter", lua_filter)),
      output_dir = output_md_dir
    )
    cat("Rendered to Markdown:", file, "\n")
  })
}
